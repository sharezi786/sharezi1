import { useState } from "react";
import { Link } from "react-router-dom";
import InputField    from "../../../../common/components/ui/InputField";
import PrimaryButton from "../../../../common/components/ui/PrimaryButton";
import { validateEmail, validatePassword, validatePhone, validateOtp } from "../../../../common/utils/validators";

// import { ReactComponent as MailIcon } from '../../../../assets/svg/loginFormsvg/MailIcon.svg?react';
// import { ReactComponent as LockIcon } from '../../../../assets/svg/loginFormsvg/LockIcon.svg?react';
// import { ReactComponent as PhoneIcon } from '../../../../assets/svg/loginFormsvg/PhoneIcon.svg?react';
// import { ReactComponent as EyeIcon } from '../../../../assets/svg/loginFormsvg/EyeIcon.svg?react';
// import { ReactComponent as EyeOffIcon } from '../../../../assets/svg/loginFormsvg/EyeOffIcon.svg?react';
// import { ReactComponent as GoogleIcon } from '../../../../assets/svg/loginFormsvg/GoogleIcon.svg?react';

// ── Icons ─────────────────────────────────────────────────
const MailIcon    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const LockIcon    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const PhoneIcon   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>;
const EyeIcon     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOffIcon  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
const GoogleIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>;

// ── Phone entry step ──────────────────────────────────────
function PhoneStep({ onSend, loading, serverError }) {
  const [cc, setCc]         = useState("+91");
  const [phone, setPhone]   = useState("");
  const [error, setError]   = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const err = validatePhone(phone);
    if (err) { setError(err); return; }
    onSend({ fullPhone: `${cc}${phone}` });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display font-bold text-xl text-[#2D3748] mb-1">Welcome back</h2>
      <p className="text-sm text-[#8A95A3] mb-6">Enter your phone number to continue</p>

      {serverError && <div className="mb-4 px-3 py-2.5 rounded-lg bg-[#E53E3E]/10 border border-[#E53E3E]/20 text-[#E53E3E] text-sm">{serverError}</div>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#2D3748] mb-1.5">Phone Number</label>
        <div className="flex gap-2">
          <select value={cc} onChange={e => setCc(e.target.value)}
            className="h-11 px-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#2D3748] outline-none focus:border-[#F07B3A] shrink-0">
            {["+91 🇮🇳","+1 🇺🇸","+44 🇬🇧","+971 🇦🇪"].map(c => (
              <option key={c} value={c.split(" ")[0]}>{c}</option>
            ))}
          </select>
          <div className="flex-1">
            <InputField id="phone" type="tel" value={phone} inputMode="numeric"
              onChange={e => { setPhone(e.target.value.replace(/\D/g,"")); setError(null); }}
              placeholder="9876543210" error={error} icon={<PhoneIcon />} />
          </div>
        </div>
      </div>

      <PrimaryButton type="submit" loading={loading}>Send OTP</PrimaryButton>
    </form>
  );
}

// ── OTP verification step ─────────────────────────────────
function OtpStep({ phone, onVerify, onResend, loading, serverError, cooldown }) {
  const [otp, setOtp]     = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const err = validateOtp(otp);
    if (err) { setError(err); return; }
    onVerify({ otp });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display font-bold text-xl text-[#2D3748] mb-1">Enter OTP</h2>
      <p className="text-sm text-[#8A95A3] mb-6">
        Sent to <strong className="text-[#F07B3A]">{phone}</strong>
        <span className="text-[10px] text-[#8A95A3] ml-2">(use 123456 for testing)</span>
      </p>

      {serverError && <div className="mb-4 px-3 py-2.5 rounded-lg bg-[#E53E3E]/10 border border-[#E53E3E]/20 text-[#E53E3E] text-sm">{serverError}</div>}

      <InputField id="otp" label="6-Digit Code" type="text" inputMode="numeric"
        value={otp} onChange={e => { setOtp(e.target.value.replace(/\D/g,"").slice(0,6)); setError(null); }}
        placeholder="123456" error={error} />

      <div className="flex justify-end -mt-2 mb-4">
        {cooldown > 0
          ? <span className="text-xs text-[#8A95A3]">Resend in 0:{String(cooldown).padStart(2,"0")}</span>
          : <button type="button" className="text-xs text-[#F07B3A] font-semibold hover:underline" onClick={onResend}>Resend OTP</button>
        }
      </div>

      <PrimaryButton type="submit" loading={loading} disabled={otp.length < 6}>Verify &amp; Login</PrimaryButton>
    </form>
  );
}

// ── Email + password step ─────────────────────────────────
function EmailStep({ onSubmit, onGoogle, loading, serverError }) {
  const [form, setForm]     = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);

  const change = k => e => { setForm(p => ({ ...p, [k]: e.target.value })); setErrors(p => ({ ...p, [k]: null })); };

  function handleSubmit(e) {
    e.preventDefault();
    const errs = { email: validateEmail(form.email), password: validatePassword(form.password) };
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return; }
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display font-bold text-xl text-[#2D3748] mb-1">Sign in</h2>
      <p className="text-sm text-[#8A95A3] mb-6">Enter your university email and password</p>

      {serverError && <div className="mb-4 px-3 py-2.5 rounded-lg bg-[#E53E3E]/10 border border-[#E53E3E]/20 text-[#E53E3E] text-sm">{serverError}</div>}

      {/* Google OAuth */}
      <button type="button" onClick={onGoogle}
        className="w-full h-11 flex items-center justify-center gap-2.5 border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#2D3748] hover:bg-[#F4F6F8] transition-colors mb-4">
        <GoogleIcon /> Continue with Google
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-[#E2E8F0]" />
        <span className="text-xs text-[#8A95A3] font-medium">or</span>
        <div className="flex-1 h-px bg-[#E2E8F0]" />
      </div>

      <InputField id="email" label="Email" type="email" value={form.email} onChange={change("email")}
        placeholder="you@university.edu" error={errors.email} icon={<MailIcon />} />
      <InputField id="password" label="Password" type={showPwd ? "text" : "password"}
        value={form.password} onChange={change("password")} placeholder="Min. 8 characters"
        error={errors.password} icon={<LockIcon />}
        rightElement={<button type="button" onClick={() => setShowPwd(v => !v)}>{showPwd ? <EyeOffIcon /> : <EyeIcon />}</button>} />

      <div className="flex justify-end -mt-2 mb-4">
        <a href="#" className="text-xs text-[#F07B3A] hover:underline font-medium">Forgot password?</a>
      </div>

      <PrimaryButton type="submit" loading={loading}>Sign In</PrimaryButton>
    </form>
  );
}

// ── Main LoginForm ────────────────────────────────────────
export default function LoginForm({ onEmailLogin, onSendOtp, onVerifyOtp, onGoogleLogin, loading, serverError }) {
  const [method, setMethod]     = useState("phone"); // "phone" | "email"
  const [step, setStep]         = useState("entry"); // "entry" | "otp"
  const [sentTo, setSentTo]     = useState("");
  const [cooldown, setCooldown] = useState(0);

  function startCooldown() {
    setCooldown(30);
    const t = setInterval(() => setCooldown(v => { if (v <= 1) { clearInterval(t); return 0; } return v - 1; }), 1000);
  }

  async function handleSend(data) {
    const ok = await onSendOtp(data);
    if (ok !== false) { setSentTo(data.fullPhone); setStep("otp"); startCooldown(); }
  }

  return (
    <div>
      {/* Method tabs — only on entry */}
      {step === "entry" && (
        <div className="flex gap-1 bg-[#F4F6F8] rounded-xl p-1 mb-6">
          {["phone","email"].map((m, i) => (
            <button key={m} type="button" onClick={() => setMethod(m)}
              className={`flex-1 h-8 rounded-lg text-sm font-semibold transition-all ${method === m ? "bg-white text-[#2D3748] shadow-sm" : "text-[#8A95A3] hover:text-[#2D3748]"}`}>
              {i === 0 ? "Phone" : "Email"}
            </button>
          ))}
        </div>
      )}

      {method === "phone" && step === "entry" && (
        <PhoneStep onSend={handleSend} loading={loading} serverError={serverError} />
      )}
      {method === "phone" && step === "otp" && (
        <OtpStep phone={sentTo} onVerify={onVerifyOtp} onResend={() => { setSentTo(""); setStep("entry"); }}
          loading={loading} serverError={serverError} cooldown={cooldown} />
      )}
      {method === "email" && (
        <EmailStep onSubmit={onEmailLogin} onGoogle={onGoogleLogin} loading={loading} serverError={serverError} />
      )}

      {/* Footer links */}
      <p className="text-center text-sm text-[#8A95A3] mt-5">
        Don&apos;t have an account?{" "}
        <Link to="/" className="text-[#F07B3A] font-semibold hover:underline">Sign Up</Link>
      </p>
    </div>
  );
}
