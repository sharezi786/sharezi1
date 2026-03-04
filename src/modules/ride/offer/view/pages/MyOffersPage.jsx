import React, { useEffect } from 'react';
import useOfferController from '../../controller/useOfferController';

const MyOffersPage = () => {
  const { offers, loading, error, fetchOffers, deleteOffer } = useOfferController();

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  if (loading) return <div className="p-4">Loading offers...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Offers</h1>
      <div className="space-y-4">
        {offers.map(offer => (
          <div key={offer.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-lg">{offer.from} to {offer.to}</p>
                <p className="text-sm text-gray-600">{offer.date}</p>
                <p className="text-sm">Seats: {offer.seats}, Price: ${offer.price}</p>
                <p className={`text-sm font-medium ${
                  offer.status === 'active' ? 'text-green-600' :
                  offer.status === 'completed' ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  Status: {offer.status}
                </p>
              </div>
              <button
                onClick={() => deleteOffer(offer.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOffersPage;
