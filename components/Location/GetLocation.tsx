
"use client";

import { useState } from "react";

interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

interface VerificationResult {
  success: boolean;
  distance?: number;
  accuracy?: number;
  message: string;
}

export default function GetLocation() {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<VerificationResult | null>(null);

  const getLocation = () => {
    setLoading(true);
    setError("");
    setLocation(null);
    setResult(null);

    // Check whether the browser supports the Geolocation API.
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    // Request the employee's current geographical position.
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        const userLocation: UserLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp,
        };

        setLocation(userLocation);

        try {
          // Send the location information to the Next.js API.
          const response = await fetch(
            "/api/verifyLocation",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userLocation),
            }
          );

          const data: VerificationResult = await response.json();

          if (!response.ok) {
            throw new Error(
              data.message || "Location verification failed."
            );
          }

          setResult(data);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to verify your location."
          );
        } finally {
          setLoading(false);
        }
      },

      // Handle Geolocation API errors.
      (error: GeolocationPositionError) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("You denied location permission. Please allow access.");
            break;

          case error.POSITION_UNAVAILABLE:
            setError("Your current location is unavailable.");
            break;

          case error.TIMEOUT:
            setError("The location request timed out. Try again.");
            break;

          default:
            setError("An unknown location error occurred.");
        }

        setLoading(false);
      },

      // Configure the Geolocation API request.
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="space-y-4">
      <button
        onClick={getLocation}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Verifying Location..." : "Verify My Location"}
      </button>

      {location && (
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="font-semibold">Location Details</h3>

          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy.toFixed(2)} metres</p>
          <p>Timestamp: {new Date(location.timestamp).toLocaleString()}</p>
        </div>
      )}

      {result && (
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="font-semibold">Verification Result</h3>

          <p>{result.message}</p>

          {result.distance !== undefined && (
            <p>Distance from office: {result.distance} metres</p>
          )}

          <p>Status: {result.success ? "Verified" : "Not Verified"}</p>
        </div>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
