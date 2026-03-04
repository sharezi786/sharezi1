export const getCurrentLocationApi = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          reject(error.message);
        }
      );
    } else {
      reject('Geolocation not supported');
    }
  });
};

export const getRouteApi = async (origin, destination) => {
  // Simulate route calculation API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { lat: origin.lat, lng: origin.lng },
        { lat: (origin.lat + destination.lat) / 2, lng: (origin.lng + destination.lng) / 2 },
        { lat: destination.lat, lng: destination.lng },
      ]);
    }, 1000);
  });
};

export const startTrackingApi = async (rideId) => {
  // Simulate starting tracking
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, rideId });
    }, 500);
  });
};

export const stopTrackingApi = async (rideId) => {
  // Simulate stopping tracking
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, rideId });
    }, 500);
  });
};
