import { createSlice } from '@reduxjs/toolkit';

const offerSlice = createSlice({
  name: 'offer',
  initialState: {
    offers: [],
    loading: false,
    error: null,
    currentOffer: null,
  },
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
      state.loading = false;
      state.error = null;
    },
    addOffer: (state, action) => {
      state.offers.push(action.payload);
    },
    updateOffer: (state, action) => {
      const index = state.offers.findIndex(offer => offer.id === action.payload.id);
      if (index !== -1) {
        state.offers[index] = action.payload;
      }
    },
    setCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setOffers, addOffer, updateOffer, setCurrentOffer, setLoading, setError } = offerSlice.actions;
export default offerSlice.reducer;
