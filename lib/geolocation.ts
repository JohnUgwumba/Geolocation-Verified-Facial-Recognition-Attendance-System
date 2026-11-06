interface Coordinates {
  latitude: number;
  longitude: number;
}

// Calculate the distance between the employee and office.
export function calculateDistance(
  user: Coordinates,
  office: Coordinates
): number {
  const earthRadius = 6371000;

  const toRadians = (degrees: number) =>
    (degrees * Math.PI) / 180;

  const lat1 = toRadians(user.latitude);
  const lat2 = toRadians(office.latitude);

  const deltaLat = toRadians(
    office.latitude - user.latitude
  );

  const deltaLon = toRadians(
    office.longitude - user.longitude
  );

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) ** 2;

  return (
    2 *
    earthRadius *
    Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  );
}

// Check whether the employee is within the office geofence.
export function verifyGeofence(
  user: Coordinates,
  office: Coordinates,
  radius: number,
  accuracy: number
) {
  const distance = calculateDistance(user, office);

  const maxAccuracy = 50;
  const validAccuracy = accuracy <= maxAccuracy;

  const insideGeofence = distance + accuracy <= radius;

  return {
    distance,
    accuracy,
    validAccuracy,
    insideGeofence: validAccuracy && insideGeofence,
  };
}