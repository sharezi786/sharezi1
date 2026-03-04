// VerificationStatusPage.jsx — FE-2
// Shows pending / verified / rejected screen
// Matches Jira Image 5 design exactly

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthLayout from "../../../../common/components/layout/AuthLayout";
import { useVerificationController } from "../../controller/useVerificationController";

// ── Icons ─────────────────────────────────────────────────
const ClockIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const ShieldIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>;
const AlertIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>;
const ArrowIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const InfoIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;

// ── Pending screen — matches Image 5 from Jira ────────────
function PendingScreen() {
    return (
        <div>
            {/* Icon */}
            <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-[#D69E2E]/10 flex items-center justify-center text-[#D69E2E]">
                    <ClockIcon />
                </div>
            </div>

            <h2 className="font-display font-bold text-xl text-[#2D3748] text-center mb-2">
                Verification in Progress
            </h2>
            <p className="text-sm text-[#8A95A3] text-center mb-6">
                Your student verification is being processed
            </p>

            {/* Documents submitted card */}
            <div className="bg-[#F4F6F8] rounded-xl p-4 mb-4">
                <p className="font-semibold text-sm text-[#2D3748] mb-3">Documents Submitted</p>
                <div className="flex flex-col gap-2">
                    {["Student ID Photo", "University Email", "Personal Information"].map(item => (
                        <div key={item} className="flex items-center gap-2.5 text-sm text-[#4A5568]">
                            <div className="w-5 h-5 rounded-full border-2 border-[#3DBDA8] flex items-center justify-center text-[#3DBDA8] shrink-0">
                                <CheckIcon />
                            </div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* What's next card */}
            <div className="bg-[#D69E2E]/8 border border-[#D69E2E]/20 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-[#D69E2E] font-semibold text-sm mb-2">
                    <InfoIcon /> What&apos;s Next?
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed mb-1">
                    Our team will review your documents within 24–48 hours. You&apos;ll receive an email once your account is verified.
                </p>
                <p className="text-xs text-[#4A5568]">
                    You can browse the app with limited access until verification is complete.
                </p>
            </div>

            {/* Actions */}
            <Link to="/student-home"
                className="w-full h-11 bg-gradient-to-r from-[#3DBDA8] to-[#2A9E8C] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(61,189,168,0.28)] mb-3">
                Browse App (Limited Access)
            </Link>
            <Link to="/"
                className="w-full h-11 border border-[#E2E8F0] text-[#2D3748] font-semibold text-sm rounded-xl flex items-center justify-center hover:border-[#F07B3A] hover:text-[#F07B3A] transition-colors">
                Return to Home
            </Link>

            <p className="text-center text-xs text-[#8A95A3] mt-4">
                Need help?{" "}
                <a href="mailto:support@sharezi.com" className="text-[#F07B3A] hover:underline">Contact Support</a>
            </p>
        </div>
    );
}

// ── Verified screen ───────────────────────────────────────
function VerifiedScreen({ onContinue }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#3DBDA8]/10 flex items-center justify-center text-[#3DBDA8] mx-auto mb-5">
                <ShieldIcon />
            </div>
            <h2 className="font-display font-bold text-xl text-[#2D3748] mb-2">You are verified!</h2>
            <p className="text-sm text-[#8A95A3] mb-6 leading-relaxed">
                Your student identity has been confirmed. You now have full access to campus rides and food sharing.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-[#3DBDA8]/10 text-[#3DBDA8] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <CheckIcon /> Verified Student
            </div>
            <button onClick={onContinue}
                className="w-full h-11 bg-gradient-to-r from-[#3DBDA8] to-[#2A9E8C] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(61,189,168,0.28)]">
                Go to Dashboard <ArrowIcon />
            </button>
        </div>
    );
}

// ── Rejected screen ───────────────────────────────────────
function RejectedScreen({ reason, onResubmit }) {
    const tips = [
        "ID photo is blurry or too dark — retake in good lighting",
        "ID is expired — use a current valid student ID",
        "Name on ID does not match your account name",
        "Wrong college entered — double check your institution",
    ];
    return (
        <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#E53E3E]/10 flex items-center justify-center text-[#E53E3E] mx-auto mb-5">
                <AlertIcon />
            </div>
            <h2 className="font-display font-bold text-xl text-[#2D3748] mb-2">Verification not approved</h2>
            <p className="text-sm text-[#8A95A3] mb-5 leading-relaxed">
                We could not verify your student identity. Please review the reason and resubmit.
            </p>

            {reason && (
                <div className="bg-[#E53E3E]/6 border border-[#E53E3E]/20 rounded-xl px-4 py-3 mb-4 text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#E53E3E] mb-1">Reason from reviewer</span>
                    <span className="text-sm text-[#2D3748]">{reason}</span>
                </div>
            )}

            <div className="bg-[#F4F6F8] rounded-xl px-4 py-3 mb-6 text-left">
                <p className="text-xs font-bold text-[#2D3748] mb-2">Common issues to fix:</p>
                <ul className="flex flex-col gap-1.5">
                    {tips.map(tip => (
                        <li key={tip} className="text-xs text-[#4A5568] flex items-start gap-2">
                            <span className="text-[#F07B3A] shrink-0 mt-0.5">•</span> {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={onResubmit}
                className="w-full h-11 bg-gradient-to-r from-[#F5A54A] to-[#F07B3A] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(240,123,58,0.32)] mb-3">
                Resubmit Verification
            </button>
            <Link to="/student-home" className="text-sm text-[#8A95A3] hover:text-[#2D3748] hover:underline">
                Continue with limited access
            </Link>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────
export default function VerificationStatusPage() {
    const location = useLocation();
    const ctrl = useVerificationController();

    // Status may come from navigation state (just submitted)
    // or fetched from API
    const statusFromNav = location.state?.status;

    useEffect(() => {
        if (!statusFromNav) ctrl.handleLoadStatus();
    }, []);

    const status = statusFromNav || ctrl.status;
    const reason = location.state?.reason || ctrl.reason;

    if (!status && ctrl.loading) {
        return (
            <AuthLayout>
                <div className="flex items-center justify-center py-20">
                    <span className="w-9 h-9 rounded-full border-[3px] border-[#E2E8F0] border-t-[#F07B3A] animate-spin" />
                </div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout>
            {status === "pending" && <PendingScreen />}
            {status === "verified" && <VerifiedScreen onContinue={ctrl.handleContinueVerified} />}
            {status === "rejected" && <RejectedScreen reason={reason} onResubmit={ctrl.handleResubmit} />}
        </AuthLayout>
    );
}
