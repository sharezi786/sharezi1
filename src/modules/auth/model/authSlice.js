import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: "u1",
      name: "Arjun Sharma",
      email: "arjun@university.edu",
      college: "Delhi University",
    },
    token: "dev_token",
    role: "student", // change to "driver" to test driver views
    verified: true,
    loading: false,
    error: null,
  },
  reducers: {
    setCredentials(state, action) {
      const { user, token, role, verified } = action.payload;
      state.user = user;
      state.token = token;
      state.role = role;
      state.verified = verified ?? false;
    },
    setVerified(state, action) {
      state.verified = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.role = null;
      state.verified = false;
      state.error = null;
    },
  },
});

export const { setCredentials, setVerified, setLoading, setError, logout } =
  authSlice.actions;
export default authSlice.reducer;
