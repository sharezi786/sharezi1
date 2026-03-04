import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../../../common/components/ui/InputField";
import PrimaryButton from "../../../../common/components/ui/PrimaryButton";
import {
    validateName, validateEmail, validatePassword,
    validateCollege, validateStudentId, getPasswordStrength,
} from "../../../../common/utils/validators";

// ── Icons ─────────────────────────────────────────────────
const UserIcon    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>;
const MailIcon    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const LockIcon    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const SchoolIcon  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const IdIcon      = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 9h4M14 12h4M14 15h2"/></svg>;
const EyeIcon     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOffIcon  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
const GoogleIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>;

// ── Password strength bar ─────────────────────────────────
function StrengthBar({ password }) {
    if (!password) return null;
    const score = getPasswordStrength(password);
    const colors = ["", "bg-[#E53E3E]", "bg-[#F07B3A]", "bg-[#F5A54A]", "bg-[#3DBDA8]"];
    const labels = ["", "Weak", "Fair", "Good", "Strong"];
    const textClr = ["", "text-[#E53E3E]", "text-[#F07B3A]", "text-[#F5A54A]", "text-[#3DBDA8]"];
    return (
        <div className="flex items-center gap-2 mt-1 mb-3">
            <div className="flex gap-1 flex-1">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= score ? colors[score] : "bg-[#E2E8F0]"}`} />
                ))}
            </div>
            <span className={`text-xs font-semibold ${textClr[score]}`}>{labels[score]}</span>
        </div>
    );
}

function validate(form, role) {
    return {
        name: validateName(form.name),
        email: validateEmail(form.email),
        password: validatePassword(form.password),
        college: validateCollege(form.college),
        ...(role === "student" ? { studentIdNumber: validateStudentId(form.studentIdNumber) } : {}),
    };
}

export default function SignupForm({ role, onSubmit, onGoogleSignup, loading, serverError }) {
    const isStudent = role === "student";
    const [form, setForm] = useState({ name: "", email: "", password: "", college: "", studentIdNumber: "" });
    const [errors, setErrors] = useState({});
    const [showPwd, setShowPwd] = useState(false);

    const change = k => e => { setForm(p => ({ ...p, [k]: e.target.value })); setErrors(p => ({ ...p, [k]: null })); };

    function handleSubmit(e) {
        e.preventDefault();
        const errs = validate(form, role);
        if (Object.values(errs).some(Boolean)) { setErrors(errs); return; }
        onSubmit({ ...form, role });
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h2 className="font-display font-bold text-xl text-[#2D3748] mb-1">
                {isStudent ? "Create Student Account" : "Create Driver Account"}
            </h2>
            <p className="text-sm text-[#8A95A3] mb-5">
                {isStudent ? "Join your campus community" : "Start earning with campus rides"}
            </p>

            {serverError && (
                <div className="mb-4 px-3 py-2.5 rounded-lg bg-[#E53E3E]/10 border border-[#E53E3E]/20 text-[#E53E3E] text-sm">
                    {serverError}
                </div>
            )}

            {/* Google */}
            <button type="button" onClick={onGoogleSignup}
                className="w-full h-11 flex items-center justify-center gap-2.5 border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#2D3748] hover:bg-[#F4F6F8] transition-colors mb-4">
                <GoogleIcon /> Continue with Google
            </button>

            <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-[#E2E8F0]" />
                <span className="text-xs text-[#8A95A3] font-medium">or fill in details</span>
                <div className="flex-1 h-px bg-[#E2E8F0]" />
            </div>

            <InputField id="name" label="Full Name" value={form.name} onChange={change("name")}
                placeholder="Arjun Sharma" error={errors.name} icon={<UserIcon />} />
            <InputField id="email" label="University Email" type="email" value={form.email} onChange={change("email")}
                placeholder="you@university.edu" error={errors.email} icon={<MailIcon />} />

            <div>
                <InputField id="password" label="Password" type={showPwd ? "text" : "password"}
                    value={form.password} onChange={change("password")} placeholder="Min. 8 characters"
                    error={errors.password} icon={<LockIcon />}
                    rightElement={<button type="button" onClick={() => setShowPwd(v => !v)}>{showPwd ? <EyeOffIcon /> : <EyeIcon />}</button>} />
                <StrengthBar password={form.password} />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2 mb-4">
                <div className="flex-1 h-px bg-[#E2E8F0]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A95A3]">
                    {isStudent ? "Student Details" : "Driver Details"}
                </span>
                <div className="flex-1 h-px bg-[#E2E8F0]" />
            </div>

            <InputField id="college" label="College / University" value={form.college} onChange={change("college")}
                placeholder="e.g. Delhi University, IIT Bombay" error={errors.college} icon={<SchoolIcon />} />

            {isStudent && (
                <>
                    <InputField id="studentIdNumber" label="Student ID Number" value={form.studentIdNumber}
                        onChange={change("studentIdNumber")} placeholder="e.g. 2021CS1234"
                        error={errors.studentIdNumber} icon={<IdIcon />} />
                    <p className="text-xs text-[#8A95A3] -mt-2 mb-4">
                        You will upload your student ID photo in the next step.
                    </p>
                </>
            )}

            <PrimaryButton type="submit" loading={loading}
                variant={isStudent ? "teal" : "orange"}>
                {isStudent ? "Create Student Account" : "Create Driver Account"}
            </PrimaryButton>

            <p className="text-center text-xs text-[#8A95A3] mt-3">
                By signing up you agree to our{" "}
                <a href="#" className="text-[#F07B3A] hover:underline">Terms</a> &amp;{" "}
                <a href="#" className="text-[#F07B3A] hover:underline">Privacy Policy</a>
            </p>

            <p className="text-center text-sm text-[#8A95A3] mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-[#F07B3A] font-semibold hover:underline">Sign In</Link>
            </p>
        </form>
    );
}
