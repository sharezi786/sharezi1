import React from 'react';

const PhoneStep = ({
  phone,
  error,
  loading,
  onPhoneChange,
  onSendOtp,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-xs font-semibold text-[#111]/50 mb-1.5 block">Phone number</label>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-[#111]/45 text-sm font-['DM Sans']"></span>
          <input
            type="tel"
            value={phone}
            onChange={onPhoneChange}
            placeholder="(555) 867-5309"
            maxLength={10}
            className="w-full h-[48px] border border-black/10 rounded-xl bg-white pl-[70px] pr-4 text-sm font-['DM Sans'] text-[#111] outline-none focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
          />
        </div>
      </div>
      {error && (
        <div className="flex items-center gap-2 text-xs text-[#EF4444]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
          {error}
        </div>
      )}
      <button
        onClick={onSendOtp}
        disabled={loading}
        className="w-full h-[50px] bg-[#3DBDA8] rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white hover:bg-[#2AA898] transition-all shadow-[0_4px_16px_rgba(61,189,168,.28)] hover:shadow-[0_8px_24px_rgba(61,189,168,.38)] hover:-translate-y-0.5"
      >
        {loading ? (
          <span className="w-4 h-4 rounded-full border-2 border-white/3 border-t-white animate-spin"></span>
        ) : (
          <>
            Send OTP <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default PhoneStep;