import { createSlice } from '@reduxjs/toolkit';

export const verificationSlice = createSlice({
  name: 'verification',
  initialState: {
    step: 1,
    phone: '',
    otp: '',
    loading: false,
    error: null,
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setStep, setPhone, setOtp, setLoading, setError } = verificationSlice.actions;

export default verificationSlice.reducer;