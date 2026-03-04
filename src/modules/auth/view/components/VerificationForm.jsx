// VerificationForm.jsx — FE-2 presentational form
// Step 1: Upload student ID  |  Step 2: Verify email OTP

import { useRef, useState } from "react";
import PrimaryButton from "../../../../common/components/ui/PrimaryButton";
import InputField    from "../../../../common/components/ui/InputField";

// ── Icons ─────────────────────────────────────────────────
const CheckIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
const UploadIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;
const MailIcon   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

// ── Step indicator ────────────────────────────────────────
function StepIndicator({ current }) {
  return (
    <div className="flex items-center mb-8">
      {["Upload ID", "Verify Email"].map((label, i) => {
        const idx    = i + 1;
        const done   = idx < current;
        const active = idx === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex items-center gap-2">
              <div className={[
                "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                done   ? "bg-[#3DBDA8] text-white" : "",
                active ? "border-2 border-[#F07B3A] bg-[#F07B3A]/10 text-[#F07B3A]" : "",
                !done && !active ? "border-2 border-[#E2E8F0] text-[#8A95A3]" : "",
              ].filter(Boolean).join(" ")}>
                {done ? <CheckIcon /> : idx}
              </div>
              <span className={`text-xs font-medium ${active ? "text-[#2D3748] font-semibold" : "text-[#8A95A3]"}`}>
                {label}
              </span>
            </div>
            {i === 0 && (
              <div className={`mx-3 w-12 h-0.5 ${done ? "bg-[#3DBDA8]" : "bg-[#E2E8F0]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Step 1: Upload ────────────────────────────────────────
function UploadStep({ onUpload, loading, serverError, uploadProgress }) {
  const inputRef                  = useRef(null);
  const [file, setFile]           = useState(null);
  const [preview, setPreview]     = useState(null);
  const [dragOver, setDragOver]   = useState(false);
  const [localError, setLocalError] = useState(null);

  function handleFile(f) {
    const allowed = ["image/jpeg","image/png","image/webp","application/pdf"];
    if (!allowed.includes(f.type)) { setLocalError("JPG, PNG, WEBP or PDF only."); return; }
    if (f.size > 5 * 1024 * 1024)  { setLocalError("File must be under 5MB."); return; }
    setLocalError(null);
    setFile(f);
    if (f.type.startsWith("image/")) {
      const r = new FileReader();
      r.onload = e => setPreview(e.target.result);
      r.readAsDataURL(f);
    } else setPreview(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!file) { setLocalError("Please select your student ID file."); return; }
    onUpload(file);
  }

  const err = serverError || localError;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display font-bold text-xl text-[#2D3748] mb-1">Upload Student ID</h2>
      <p className="text-sm text-[#8A95A3] mb-5">Clear photo or scan — JPG, PNG, PDF up to 5MB</p>

      {err && (
        <div className="mb-4 px-3 py-2.5 rounded-lg bg-[#E53E3E]/10 border border-[#E53E3E]/20 text-[#E53E3E] text-sm">
          {err}
        </div>
      )}

      {/* Dropzone */}
      <div
        onClick={() => !loading && inputRef.current?.click()}
        onDragOver={e  => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={e => {
          e.preventDefault(); setDragOver(false);
          if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
        }}
        role="button" tabIndex={0}
        onKeyDown={e => e.key === "Enter" && inputRef.current?.click()}
        className={[
          "relative min-h-40 rounded-xl border-2 border-dashed flex items-center justify-center cursor-pointer mb-4 transition-all overflow-hidden",
          dragOver           ? "border-[#F07B3A] bg-[#F07B3A]/5"   : "",
          file && !dragOver  ? "border-[#3DBDA8] bg-[#3DBDA8]/5 border-solid" : "",
          !file && !dragOver ? "border-[#E2E8F0] bg-[#F4F6F8] hover:border-[#F07B3A] hover:bg-[#F07B3A]/5" : "",
        ].filter(Boolean).join(" ")}
      >
        {preview ? (
          <img src={preview} alt="ID preview" className="w-full h-44 object-contain p-3" />
        ) : file ? (
          <div className="flex flex-col items-center gap-2 text-[#3DBDA8] text-sm font-medium p-6">
            <CheckIcon /> {file.name}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 p-6 text-center">
            <span className="text-[#8A95A3]"><UploadIcon /></span>
            <p className="text-sm font-medium text-[#2D3748]">Click to upload or drag and drop</p>
            <p className="text-xs text-[#8A95A3]">JPG, PNG, WEBP, PDF up to 5MB</p>
          </div>
        )}
        <input ref={inputRef} type="file"
          accept="image/jpeg,image/png,image/webp,application/pdf"
          onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
          className="hidden" aria-hidden="true" />
      </div>

      {/* File info + remove */}
      {file && (
        <div className="flex items-center gap-2 text-xs text-[#3DBDA8] font-medium mb-4">
          <CheckIcon />
          <span>{file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
          <button type="button" onClick={e => { e.stopPropagation(); setFile(null); setPreview(null); }}
            className="ml-auto text-[#E53E3E] hover:underline font-medium">Remove</button>
        </div>
      )}

      {/* Upload progress */}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-[#F5A54A] to-[#F07B3A] rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }} />
        </div>
      )}

      <PrimaryButton type="submit" loading={loading} disabled={!file}>
        Upload &amp; Continue
      </PrimaryButton>
    </form>
  );
}

// ── Step 2: Email OTP ─────────────────────────────────────
function EmailStep({ universityEmail, otp, onOtpChange, onSendOtp, onVerify, otpSent, loading, serverError, resendCooldown }) {
  const [localError, setLocalError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!otp || otp.length !== 6) { setLocalError("Enter the 6-digit code."); return; }
    setLocalError(null);
    onVerify();
  }

  const err = serverError || localError;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display font-bold text-xl text-[#2D3748] mb-1">Verify University Email</h2>
      <p className="text-sm text-[#8A95A3] mb-5">
        We will send a code to{" "}
        <strong className="text-[#F07B3A]">{universityEmail}</strong>
      </p>

      {err && (
        <div className="mb-4 px-3 py-2.5 rounded-lg bg-[#E53E3E]/10 border border-[#E53E3E]/20 text-[#E53E3E] text-sm">
          {err}
        </div>
      )}

      {!otpSent ? (
        <PrimaryButton type="button" loading={loading} onClick={onSendOtp} variant="teal">
          Send Verification Code
        </PrimaryButton>
      ) : (
        <>
          {/* Sent confirmation */}
          <div className="flex items-center gap-2 bg-[#3DBDA8]/10 border border-[#3DBDA8]/20 rounded-xl px-3 py-2.5 mb-4 text-sm text-[#3DBDA8] font-medium">
            <CheckIcon />
            <span>Code sent to <strong>{universityEmail}</strong></span>
            <span className="text-[10px] ml-1">(use 123456)</span>
          </div>

          <InputField id="emailOtp" label="6-Digit Code"
            type="text" inputMode="numeric"
            value={otp}
            onChange={e => { onOtpChange(e.target.value.replace(/\D/g,"").slice(0,6)); setLocalError(null); }}
            placeholder="123456" icon={<MailIcon />} />

          <div className="flex justify-end -mt-2 mb-4">
            {resendCooldown > 0
              ? <span className="text-xs text-[#8A95A3]">Resend in 0:{String(resendCooldown).padStart(2,"0")}</span>
              : <button type="button" className="text-xs text-[#F07B3A] font-semibold hover:underline" onClick={onSendOtp}>Resend Code</button>
            }
          </div>

          <PrimaryButton type="submit" loading={loading} disabled={otp.length < 6} variant="teal">
            Verify &amp; Submit
          </PrimaryButton>
        </>
      )}
    </form>
  );
}

// ── Main export ───────────────────────────────────────────
export default function VerificationForm({
  step, universityEmail, otp, onOtpChange,
  onUpload, onSendOtp, onVerify,
  otpSent, loading, serverError,
  uploadProgress, resendCooldown,
}) {
  return (
    <div>
      <StepIndicator current={step === "upload" ? 1 : 2} />
      {step === "upload" && (
        <UploadStep
          onUpload={onUpload} loading={loading}
          serverError={serverError} uploadProgress={uploadProgress}
        />
      )}
      {step === "email" && (
        <EmailStep
          universityEmail={universityEmail} otp={otp}
          onOtpChange={onOtpChange} onSendOtp={onSendOtp}
          onVerify={onVerify} otpSent={otpSent}
          loading={loading} serverError={serverError}
          resendCooldown={resendCooldown}
        />
      )}
    </div>
  );
}
