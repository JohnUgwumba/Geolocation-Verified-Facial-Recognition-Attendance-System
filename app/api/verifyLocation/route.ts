
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { verifyGeofence } from "@/lib/geolocation";

const locationSchema = z.object({
  officeId: z.string().min(1),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  accuracy: z.number().positive().max(10000),
  timestamp: z.number().int().positive(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = locationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid location data." },
        { status: 400 }
      );
    }

    const {
      officeId,
      latitude,
      longitude,
      accuracy,
      timestamp,
    } = result.data;

    // Validate location timestamp.
    const now = Date.now();

    if (
      now - timestamp > 30000 ||
      timestamp > now + 5000
    ) {
      return NextResponse.json(
        { message: "Location reading is too old." },
        { status: 400 }
      );
    }

    // Retrieve the selected active office from Supabase.
    const office = await prisma.officeLocation.findFirst({
      where: {
        id: officeId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        latitude: true,
        longitude: true,
        radius: true,
      },
    });

    if (!office) {
      return NextResponse.json(
        { message: "Office location not found or inactive." },
        { status: 404 }
      );
    }

    // Verify employee location against database coordinates.
    const verification = verifyGeofence(
      { latitude, longitude },
      {
        latitude: office.latitude,
        longitude: office.longitude,
      },
      office.radius,
      accuracy
    );

    return NextResponse.json({
      success: verification.insideGeofence,
      office: {
        id: office.id,
        name: office.name,
      },
      distance: Math.round(verification.distance),
      accuracy: verification.accuracy,
      message: verification.insideGeofence
        ? "Location verified."
        : "Location could not be verified.",
    });

  } catch (error) {
    console.error("Location verification error:", error);

    return NextResponse.json(
      { message: "Location verification failed." },
      { status: 500 }
    );
  }
}
