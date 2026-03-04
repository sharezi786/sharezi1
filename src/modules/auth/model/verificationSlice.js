// verificationSlice.js — verification UI state

import { createSlice } from "@reduxjs/toolkit";

const verificationSlice = createSlice({
  name: "verification",
  initialState: {
    step:           "upload",   // "upload" | "email"
    uploadProgress: 0,
    fileUrl:        null,
    otpSent:        false,
    emailVerified:  false,
    status:         null,       // "pending" | "verified" | "rejected"
    reason:         null,
    loading:        false,
    error:          null,
  },
  reducers: {
    setStep(state, action)           { state.step           = action.payload; },
    setUploadProgress(state, action) { state.uploadProgress = action.payload; },
    setFileUrl(state, action)        { state.fileUrl        = action.payload; },
    setOtpSent(state, action)        { state.otpSent        = action.payload; },
    setEmailVerified(state, action)  { state.emailVerified  = action.payload; },
    setStatus(state, action)         { state.status         = action.payload.status; state.reason = action.payload.reason || null; },
    setLoading(state, action)        { state.loading        = action.payload; },
    setError(state, action)          { state.error          = action.payload; },
    resetVerification(state)         {
      state.step = "upload"; state.uploadProgress = 0;
      state.fileUrl = null; state.otpSent = false;
      state.emailVerified = false; state.error = null;
    },
  },
});

export const {
  setStep, setUploadProgress, setFileUrl, setOtpSent,
  setEmailVerified, setStatus, setLoading, setError, resetVerification,
} = verificationSlice.actions;

export default verificationSlice.reducer;
