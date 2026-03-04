import React from 'react';
import useOfferController from '../../controller/useOfferController';
import OfferForm from '../components/OfferForm';

const OfferRidePage = () => {
  const { createOffer, loading, error } = useOfferController();

  const handleSubmit = (offerData) => {
    createOffer(offerData);
    // TODO: Add navigation or success message
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Offer a Ride</h1>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <OfferForm onSubmit={handleSubmit} />
      {loading && <p className="mt-4">Creating offer...</p>}
    </div>
  );
};

export default OfferRidePage;
