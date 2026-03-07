import React from 'react';

const EmailStep = ({
  email,
  password,
  showPassword,
  error,
  loading,
  onEmailChange,
  onPasswordChange,
  onShowPasswordToggle,
  onSubmit,
  onForgotPassword,
}) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-xs font-semibold text-[#111]/50 mb-1.5 block">University email</label>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="you@university.edu"
              className="w-full h-[48px] border border-black/10 rounded-xl bg-white pl-10 pr-4 text-sm font-['DM Sans'] text-[#111] outline-none focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-[#111]/50">Password</label>
            <button type="button" onClick={onForgotPassword} className="text-xs text-[#F07B3A] font-semibold hover:underline">Forgot password?</button>
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onPasswordChange}
              placeholder="Enter your password"
              className="w-full h-[48px] border border-black/10 rounded-xl bg-white pl-10 pr-11 text-sm font-['DM Sans'] text-[#111] outline-none focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
            />
            <button type="button" onClick={onShowPasswordToggle} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#111]/60 hover:text-[#111]/80">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                {showPassword ? (
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92 1.11-1.11L3.51 2.3 2.4 3.41l1.42 1.42C2.96 6.39 2.73 8.22 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42 1.11-1.11L12 7zM12 17c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 2.21 1.79 4 4 4 .2 0 .39-.03.57-.07l1.57 1.57c-.64.31-1.37.49-2.14.49zm2.07-7.75c-.12-.06-.25-.1-.39-.1-1.1 0-2 .9-2 2 0 .14.04.27.1.39l1.49 1.49zM12 4.5c5 0 9.27 3.11 11 7.5-.23.63-.52 1.23-.85 1.78l-1.48-1.48c.23-.41.44-.85.62-1.3C19.27 7.61 15 4.5 10 4.5c-.71 0-1.4.08-2.06.24l1.48 1.48c.55-.23.99-.44 1.4-.62z"/>
                ) : (
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                )}
              </svg>
            </button>
          </div>
        </div>
        {error && (
          <div className="bg-[#FEF2F2] border border-[#EF4444]/20 rounded-xl px-4 py-3 flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#EF4444]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <p className="text-sm text-[#EF4444] font-medium">{error}</p>
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[50px] bg-[#F07B3A] rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white hover:bg-[#E8662A] transition-all shadow-[0_4px_16px_rgba(240,123,58,.28)] hover:shadow-[0_8px_24px_rgba(240,123,58,.38)] hover:-translate-y-0.5"
        >
          {loading ? (
            <span className="w-4 h-4 rounded-full border-2 border-white/3 border-t-white animate-spin"></span>
          ) : (
            <>
              Log in <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default EmailStep;