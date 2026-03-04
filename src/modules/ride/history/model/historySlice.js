import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    rides: [],
    loading: false,
    error: null,
  },
  reducers: {
    setHistory: (state, action) => {
      state.rides = action.payload;
      state.loading = false;
      state.error = null;
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

export const { setHistory, setLoading, setError } = historySlice.actions;
export default historySlice.reducer;
