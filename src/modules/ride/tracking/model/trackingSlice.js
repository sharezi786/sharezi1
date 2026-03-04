import { createSlice } from '@reduxjs/toolkit';

const trackingSlice = createSlice({
  name: 'tracking',
  initialState: {
    currentLocation: null,
    route: [],
    isTracking: false,
    error: null,
  },
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setRoute: (state, action) => {
      state.route = action.payload;
    },
    startTracking: (state) => {
      state.isTracking = true;
      state.error = null;
    },
    stopTracking: (state) => {
      state.isTracking = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isTracking = false;
    },
  },
});

export const { setCurrentLocation, setRoute, startTracking, stopTracking, setError } = trackingSlice.actions;
export default trackingSlice.reducer;
