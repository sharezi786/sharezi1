import AuthLayout from "../../../../common/components/layout/AuthLayout";
import VerificationForm  from "../components/VerificationForm";
import { useVerificationController } from "../../controller/useVerificationController";

export default function VerificationPage() {
  const ctrl = useVerificationController();

  return (
    <AuthLayout>
      <VerificationForm
        step={ctrl.step}
        universityEmail={ctrl.universityEmail}
        otp={ctrl.otp}
        onOtpChange={ctrl.setOtp}
        onUpload={ctrl.handleUpload}
        onSendOtp={ctrl.handleSendOtp}
        onVerify={ctrl.handleVerifyAndSubmit}
        otpSent={ctrl.otpSent}
        loading={ctrl.loading}
        serverError={ctrl.serverError}
        uploadProgress={ctrl.uploadProgress}
        resendCooldown={ctrl.resendCooldown}
      />
    </AuthLayout>
  );
}
