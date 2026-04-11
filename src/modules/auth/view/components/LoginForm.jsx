import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailStep from './EmailStep';
import PhoneStep from './PhoneStep';
import OtpStep from './OtpStep';

const LoginForm = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState(1); // 1: phone input, 2: otp
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const otpRefs = useRef([]);
  const [showReset, setShowReset] = useState(false);

  const handleForgotPassword = () => setShowReset(true);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    setTimeout(() => {
      // Mock success
      setLoading(false);
      // Navigate to home or handle login
    }, 1400);
  };

  const handleSendOtp = () => {
    if (!phone || phone.length !== 10) {
      setError('Enter a valid 10-digit phone number');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setCooldown(30);
      startCountdown();
    }, 1000);
  };

  const handleVerifyOtp = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setOtpError('Enter complete OTP');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock success
    }, 1200);
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError('');
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKey = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const resendOtp = () => {
    setOtp(['', '', '', '', '', '']);
    setCooldown(30);
    startCountdown();
  };

  const backToPhone = () => {
    setStep(1);
    setOtp(['', '', '', '', '', '']);
    setOtpError('');
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col">
      {/* Nav */}
      <nav className="shrink-0 px-5 sm:px-8 h-16 flex items-center justify-between border-b border-black/7 bg-white/90 backdrop-blur-md z-20">
        <span onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-xl bg-[#F07B3A] flex items-center justify-center">
            <span className="icon text-white text-sm">hub</span>
          </div>
          <span style={{fontFamily:'Syne', fontWeight:800}} className="text-[#111] text-lg">Sharezi</span>
        </span>
        <button onClick={() => navigate('/signup')} className="text-sm text-[#111]/45 hover:text-[#111] transition-colors">
          New here? <span className="text-[#F07B3A] font-semibold">Sign up</span>
        </button>
      </nav>

      {showReset ? (
        <div className="flex flex-1">
          <div className="flex-1 flex items-start justify-center px-5 sm:px-8 py-10">
            <div className="w-full max-w-[420px]">
              {/* Header */}
              <div className="mb-7">
                <h1 className="text-3xl text-[#111] mb-1">Reset Password</h1>
                <p className="text-[#111]/40 text-sm">Enter your university email to receive a reset link</p>
              </div>
              <form>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#111]/50 mb-1.5 block">University email</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <input
                        type="email"
                        placeholder="you@university.edu"
                        className="w-full h-[48px] border border-black/10 rounded-xl bg-white pl-10 pr-4 text-sm font-['DM Sans'] text-[#111] outline-none focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[50px] bg-[#3DBDA8] rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white hover:bg-[#2AA898] transition-all shadow-[0_4px_16px_rgba(61,189,168,.28)] hover:shadow-[0_8px_24px_rgba(61,189,168,.38)] hover:-translate-y-0.5"
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReset(false)}
                    className="text-sm text-[#111]/45 hover:text-[#111] transition-colors"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1">
          {/* Left Panel */}
          <div className="left-dark hidden lg:flex lg:w-[400px] xl:w-[460px] flex-col justify-between p-10 xl:p-14 shrink-0 sticky top-0" style={{height:'calc(100vh - 64px)'}}>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white/55 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DBDA8]" style={{boxShadow:'0 0 0 3px rgba(61,189,168,.25)'}}></span>
                Campus-verified platform
              </div>
              <h2 className="text-4xl xl:text-5xl text-white leading-[1.1] mb-5">
                Welcome<br/>back to<br/><span style={{background:'linear-gradient(135deg,#F5A54A,#F07B3A)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>Sharezi.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">Your campus community for rides and food — verified students only.</p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-8 border-t border-white/8">
              <div>
                <p style={{fontFamily:'Syne', fontWeight:800}} className="text-2xl text-white">2.4K+</p>
                <p className="text-white/30 text-xs mt-0.5">Students</p>
              </div>
              <div className="w-px bg-white/8"></div>
              <div>
                <p style={{fontFamily:'Syne', fontWeight:800}} className="text-2xl text-white">18K+</p>
                <p className="text-white/30 text-xs mt-0.5">Rides done</p>
              </div>
              <div className="w-px bg-white/8"></div>
              <div>
                <p style={{fontFamily:'Syne', fontWeight:800}} className="text-2xl text-white">4.9★</p>
                <p className="text-white/30 text-xs mt-0.5">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 flex items-start justify-center px-5 sm:px-8 py-10">
            <div className="w-full max-w-[420px]">
              {/* Header */}
              <div className="mb-7">
                <h1 className="text-3xl text-[#111] mb-1">Log in</h1>
                <p className="text-[#111]/40 text-sm">Don't have an account? <span onClick={() => navigate('/signup')} className="text-[#F07B3A] font-semibold hover:underline cursor-pointer">Sign up</span></p>
              </div>

              {/* Google OAuth */}
              <button className="w-full h-[48px] border border-black/10 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 bg-white hover:border-black/18 transition-colors mb-5" onClick={() => navigate('/student-home')}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-black/8"></div>
                <span className="text-xs text-[#111]/28 font-medium">or</span>
                <div className="flex-1 h-px bg-black/8"></div>
              </div>

              {/* Method tabs */}
              <div className="bg-[#111]/5 rounded-xl p-1 flex gap-1 mb-6">
                <button onClick={() => setMethod('email')} className={`flex-1 h-[38px] border-0 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${method === 'email' ? 'bg-white text-[#111] shadow-sm' : 'text-[#111]/40'}`}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email
                </button>
                <button onClick={() => setMethod('phone')} className={`flex-1 h-[38px] border-0 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${method === 'phone' ? 'bg-white text-[#111] shadow-sm' : 'text-[#111]/40'}`}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Phone OTP
                </button>
              </div>

              {/* Email Panel */}
              {method === 'email' && (
                <EmailStep
                  email={email}
                  password={password}
                  showPassword={showPassword}
                  error={error}
                  loading={loading}
                  onEmailChange={(e) => setEmail(e.target.value)}
                  onPasswordChange={(e) => setPassword(e.target.value)}
                  onShowPasswordToggle={() => setShowPassword(!showPassword)}
                  onSubmit={handleEmailLogin}
                  onForgotPassword={handleForgotPassword}
                />
              )}

              {/* Phone Panel */}
              {method === 'phone' && (
                <div>
                  {step === 1 && (
                    <PhoneStep
                      phone={phone}
                      error={error}
                      loading={loading}
                      onPhoneChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      onSendOtp={handleSendOtp}
                    />
                  )}
                  {step === 2 && (
                    <OtpStep
                      phone={phone}
                      otp={otp}
                      otpError={otpError}
                      cooldown={cooldown}
                      loading={loading}
                      otpRefs={otpRefs}
                      onOtpChange={handleOtpChange}
                      onOtpKey={handleOtpKey}
                      onResend={resendOtp}
                      onBack={backToPhone}
                      onVerify={handleVerifyOtp}
                    />
                  )}
                </div>
              )}

              <p className="text-center text-xs text-[#111]/30 mt-7">
                By continuing, you agree to our <a href="#" className="text-[#F07B3A] font-semibold hover:underline">Terms</a> & <a href="#" className="text-[#F07B3A] font-semibold hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;