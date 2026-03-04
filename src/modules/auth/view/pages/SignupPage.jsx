// SignupPage.jsx — FE-1
// Reads role from URL param, passes to SignupForm

import { useParams, Navigate } from "react-router-dom";
import AuthLayout from "../../../../common/components/layout/AuthLayout";
import SignupForm  from "../components/SignupForm";
import { useAuthController } from "../../controller/useAuthController";

export default function SignupPage() {
  const { role } = useParams();
  const { loading, serverError, handleRegister, handleGoogleLogin } = useAuthController();

  // Guard — only valid roles
  if (!["student", "driver"].includes(role)) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthLayout>
      <SignupForm
        role={role}
        onSubmit={handleRegister}
        onGoogleSignup={handleGoogleLogin}
        loading={loading}
        serverError={serverError}
      />
    </AuthLayout>
  );
}
