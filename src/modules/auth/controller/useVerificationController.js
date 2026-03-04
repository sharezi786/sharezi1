// useVerificationController.js — all verification logic
// VerificationPage calls these. Page never touches API directly.

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setStep, setUploadProgress, setFileUrl,
  setOtpSent, setEmailVerified, setStatus,
  setLoading, setError, resetVerification,
} from "../model/verificationSlice";
import { setVerified } from "../model/authSlice";
import { addToast } from "../../../common/model/uiSlice";

export function useVerificationController() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user }         = useSelector(s => s.auth);
  const verState         = useSelector(s => s.verification);
  const [otp, setOtp]   = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  function startCooldown() {
    setResendCooldown(30);
    const t = setInterval(() => {
      setResendCooldown(v => { if (v <= 1) { clearInterval(t); return 0; } return v - 1; });
    }, 1000);
  }

  // Step 1: Upload student ID file
  async function handleUpload(file) {
    dispatch(setLoading(true));
    dispatch(setError(null));
    dispatch(setUploadProgress(0));
    await new Promise(r => setTimeout(r, 1000));
    dispatch(setFileUrl("mock-file-url"));
    dispatch(setUploadProgress(100));
    dispatch(setStep("email"));
    dispatch(addToast({ type: "success", message: "Student ID uploaded successfully" }));
    dispatch(setLoading(false));
  }

  // Step 2: Send email OTP
  async function handleSendOtp() {
    dispatch(setLoading(true));
    dispatch(setError(null));
    await new Promise(r => setTimeout(r, 600));
    dispatch(setOtpSent(true));
    startCooldown();
    dispatch(addToast({ type: "success", message: "Verification code sent to your email" }));
    dispatch(setLoading(false));
  }

  // Step 2: Verify email OTP + submit
  async function handleVerifyAndSubmit() {
    dispatch(setLoading(true));
    dispatch(setError(null));
    await new Promise(r => setTimeout(r, 600));
    dispatch(setEmailVerified(true));
    dispatch(addToast({ type: "success", message: "Verification submitted! We will review within 48 hours." }));
    navigate("/verify-status", { state: { status: "pending" }, replace: true });
    dispatch(setLoading(false));
  }

  // Status page: load current status
  async function handleLoadStatus() {
    dispatch(setLoading(true));
    await new Promise(r => setTimeout(r, 600));
    dispatch(setStatus({ status: "pending", reason: null }));
    dispatch(setLoading(false));
  }

  function handleContinueVerified() {
    dispatch(setVerified(true));
    navigate("/student-home", { replace: true });
  }

  function handleResubmit() {
    dispatch(resetVerification());
    navigate("/verify", { replace: true });
  }

  return {
    // State
    step:           verState.step,
    uploadProgress: verState.uploadProgress,
    otpSent:        verState.otpSent,
    loading:        verState.loading,
    serverError:    verState.error,
    status:         verState.status,
    reason:         verState.reason,
    otp,
    setOtp,
    resendCooldown,
    universityEmail: user?.email || "you@university.edu",

    // Handlers
    handleUpload,
    handleSendOtp,
    handleVerifyAndSubmit,
    handleLoadStatus,
    handleContinueVerified,
    handleResubmit,
  };
}
