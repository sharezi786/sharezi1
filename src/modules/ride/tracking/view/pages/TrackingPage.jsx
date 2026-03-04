import React, { useEffect } from 'react';
import useTrackingController from '../../controller/useTrackingController';
import TrackingMap from '../components/TrackingMap';

const TrackingPage = () => {
  const { currentLocation, route, isTracking, error, getCurrentLocation, startTrackingRide, stopTrackingRide } = useTrackingController();

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  const handleStart = () => {
    startTrackingRide(1); // Example rideId, replace with actual ride ID
  };

  const handleStop = () => {
    stopTrackingRide(1); // Example rideId, replace with actual ride ID
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ride Tracking</h1>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <TrackingMap currentLocation={currentLocation} route={route} />
      <div className="mt-4 space-x-2">
        <button
          onClick={handleStart}
          disabled={isTracking}
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Start Tracking
        </button>
        <button
          onClick={handleStop}
          disabled={!isTracking}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Stop Tracking
        </button>
      </div>
      {isTracking && <p className="mt-4 text-green-600">Tracking is active</p>}
    </div>
  );
};

export default TrackingPage;
