import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials, logout } from "../model/authSlice";
import { addToast } from "../../../common/model/uiSlice";
import { ROLE_HOME } from "../../../common/utils/constants";

// Mock users — no API needed
const MOCK_USERS = {
  student: { id: "u1", name: "Arjun Sharma",  email: "arjun@university.edu",  college: "Delhi University", role: "student", verified: true },
  driver:  { id: "u2", name: "Rahul Singh",   email: "rahul@university.edu",  college: "IIT Bombay",       role: "driver",  verified: true },
};

export function useAuthController() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading]       = useState(false);
  const [serverError, setServerError] = useState(null);

  function login(role = "student") {
    const user = MOCK_USERS[role] || MOCK_USERS.student;
    dispatch(setCredentials({ user, token: "dev_token", role: user.role, verified: user.verified }));
    dispatch(addToast({ type: "success", message: `Welcome, ${user.name}!` }));
    navigate(ROLE_HOME[user.role] || "/student-home", { replace: true });
  }

  async function handleEmailLogin({ email, password }) {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    login(email.includes("driver") ? "driver" : "student");
  }

  async function handleSendOtp() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    dispatch(addToast({ type: "success", message: "OTP sent (use 123456)" }));
    return true;
  }

  async function handleVerifyOtp() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    login("student");
  }

  async function handleRegister({ role }) {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    login(role);
  }

  async function handleGoogleLogin() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    login("student");
  }

  function handleLogout() {
    dispatch(logout());
    navigate("/", { replace: true });
  }

  return {
    loading,
    serverError,
    clearError: () => setServerError(null),
    handleEmailLogin,
    handleSendOtp,
    handleVerifyOtp,
    handleRegister,
    handleGoogleLogin,
    handleLogout,
  };
}
