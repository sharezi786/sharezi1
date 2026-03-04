// LoginPage.jsx — FE-1
// Thin page — just wires controller to form

import AuthLayout from "../../../../common/components/layout/AuthLayout";
import LoginForm from "../components/LoginForm";
import { useAuthController } from "../../controller/useAuthController";

export default function LoginPage() {
    const {
        loading, serverError,
        handleEmailLogin, handleSendOtp,
        handleVerifyOtp, handleGoogleLogin,
    } = useAuthController();

    return (
        <AuthLayout>
            <LoginForm
                onEmailLogin={handleEmailLogin}
                onSendOtp={handleSendOtp}
                onVerifyOtp={handleVerifyOtp}
                onGoogleLogin={handleGoogleLogin}
                loading={loading}
                serverError={serverError}
            />
        </AuthLayout>
    );
}
