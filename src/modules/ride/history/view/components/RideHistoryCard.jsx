import React from 'react';

const RideHistoryCard = ({ ride }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg">{ride.from} to {ride.to}</p>
          <p className="text-sm text-gray-600">{ride.date}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl">${ride.cost}</p>
          <p className={`text-sm font-medium ${
            ride.status === 'completed' ? 'text-green-600' :
            ride.status === 'cancelled' ? 'text-red-600' : 'text-yellow-600'
          }`}>
            {ride.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RideHistoryCard;
