import { useDispatch, useSelector } from 'react-redux';
import { setOffers, addOffer, updateOffer, setLoading, setError } from '../model/offerSlice';
import { createOfferApi, fetchOffersApi, updateOfferApi, deleteOfferApi } from '../services/offerApi';

const useOfferController = () => {
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector(state => state.offer);

  const createOffer = async (offerData) => {
    dispatch(setLoading());
    try {
      const newOffer = await createOfferApi(offerData);
      dispatch(addOffer(newOffer));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const fetchOffers = async () => {
    dispatch(setLoading());
    try {
      const data = await fetchOffersApi();
      dispatch(setOffers(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const updateOffer = async (id, updateData) => {
    try {
      const updatedOffer = await updateOfferApi(id, updateData);
      dispatch(updateOffer(updatedOffer));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const deleteOffer = async (id) => {
    try {
      await deleteOfferApi(id);
      dispatch(setOffers(offers.filter(offer => offer.id !== id)));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return { offers, loading, error, createOffer, fetchOffers, updateOffer, deleteOffer };
};

export default useOfferController;
