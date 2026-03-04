import React, { useEffect } from 'react';
import useHistoryController from '../../controller/useHistoryController';
import RideHistoryCard from '../components/RideHistoryCard';

const RideHistoryPage = () => {
  const { rides, loading, error, fetchHistory } = useHistoryController();

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  if (loading) return <div>Loading ride history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ride History</h1>
      <div className="space-y-4">
        {rides.map(ride => (
          <RideHistoryCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default RideHistoryPage;
