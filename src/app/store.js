import { configureStore, createSlice } from '@reduxjs/toolkit';
import verificationSlice from '../modules/auth/model/verificationSlice';
import uiSlice from '../common/model/uiSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { login, logout, setRole } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    verification: verificationSlice,
    ui: uiSlice,
  },
});