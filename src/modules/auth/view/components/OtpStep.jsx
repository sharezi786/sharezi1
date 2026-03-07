import React from 'react';

const OtpStep = ({
  phone,
  otp,
  otpError,
  cooldown,
  loading,
  otpRefs,
  onOtpChange,
  onOtpKey,
  onResend,
  onBack,
  onVerify,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <div>
          <p className="text-sm font-semibold text-[#111]">Enter OTP</p>
          <p className="text-xs text-[#111]/40">
            Sent to +91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-between mb-5">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (otpRefs.current[index] = el)}
            type="number"
            value={digit}
            onChange={(e) => onOtpChange(index, e.target.value)}
            onKeyDown={(e) => onOtpKey(e, index)}
            maxLength={1}
            className={`w-[52px] h-[56px] border border-black/10 rounded-xl bg-white text-center text-xl font-bold font-['Syne'] text-[#111] outline-none focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)] ${
              digit ? 'border-[#3DBDA8] bg-[#EAF9F7]' : ''
            } ${otpError ? 'border-[#EF4444]' : ''}`}
          />
        ))}
      </div>
      {otpError && (
        <div className="flex items-center gap-2 text-xs text-[#EF4444] mb-3">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
          {otpError}
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-[#111]/40">Didn't receive it?</p>
        <div className="flex items-center gap-2">
          {cooldown > 0 ? (
            <span className="text-xs text-[#111]/30">Resend in {cooldown}s</span>
          ) : (
            <button
              onClick={onResend}
              className="text-xs text-[#3DBDA8] font-semibold hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
      <button
        onClick={onVerify}
        disabled={otp.some((d) => !d) || loading}
        className="w-full h-[50px] bg-[#3DBDA8] rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white hover:bg-[#2AA898] transition-all shadow-[0_4px_16px_rgba(61,189,168,.28)] hover:shadow-[0_8px_24px_rgba(61,189,168,.38)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {loading ? (
          <span className="w-4 h-4 rounded-full border-2 border-white/3 border-t-white animate-spin"></span>
        ) : (
          <>
            Verify OTP <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default OtpStep;