import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    toasts: [],
  },
  reducers: {
    addToast: (state, action) => {
      state.toasts.push({ id: Date.now(), ...action.payload });
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = uiSlice.actions;
export default uiSlice.reducer;