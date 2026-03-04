import React from 'react';

const TrackingMap = ({ currentLocation, route }) => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
      <div className="text-center">
        <p className="font-semibold">Map View</p>
        {currentLocation && (
          <p className="text-sm">
            Current Location: {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}
          </p>
        )}
        {route && <p className="text-sm">Route with {route.length} points</p>}
        {/* TODO: Integrate with a map library like Google Maps or Leaflet */}
      </div>
    </div>
  );
};

export default TrackingMap;
