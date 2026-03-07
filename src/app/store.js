import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../modules/auth/model/authSlice';
import verificationSlice from '../modules/auth/model/verificationSlice';
import uiSlice from '../common/model/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    verification: verificationSlice,
    ui: uiSlice,
  },
});