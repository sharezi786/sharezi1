import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupFormStep = ({ selectedRole, formData, errors, onChange, onSubmit, uploadedFile, onFileUpload, clearFile, fileInputRef, roleConfig, loading, onBack }) => {
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    onChange(e);
  };

  const [dragOver, setDragOver] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const getPasswordStrength = (password = "") => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = getPasswordStrength(formData?.password);
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

  const iconPaths = {
    student: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
    driver: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z',
    admin: 'M17 11c.34 0 .67.04 1 .11V6.85c0-.59-.21-1.15-.58-1.59l-1.59-1.9c-.27-.32-.69-.51-1.13-.51H8.28c-.44 0-.86.19-1.13.51L5.58 5.26c-.37.44-.58 1-.58 1.59v4.26c.33-.07.66-.11 1-.11h10zM8.5 5.36c.26-.31.69-.5 1.13-.5h4.74c.44 0 .87.19 1.13.5l.78.93H7.72l.78-.93zM17 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2v-2c0-.28.22-.5.5-.5s.5.22-.5.5v2h2c.28 0 .5.22.5.5s-.22.5-.5.5z'
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileUpload(file);
  };

  return (
    <div id="signup-form-step" className="opacity-100 transform translate-x-0 transition-opacity duration-300 ease-out transition-transform duration-300 ease-out">

      {/* Back + role badge */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="w-9 h-9 rounded-xl bg-white border border-black/10 flex items-center justify-center hover:bg-[#F7F7F5] transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: selectedRole ? roleConfig[selectedRole].bg : '#ccc' }}>
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d={iconPaths[selectedRole]} />
            </svg>
          </div>
          <span className="text-sm font-semibold text-[#111]">{selectedRole ? `${roleConfig[selectedRole].label} Account` : 'Account'}</span>
        </div>
        <span className="text-[#111]/25 text-xs ml-auto">Step 2 of 3</span>
      </div>

      <h1 className="text-2xl text-[#111] mb-1">Create your account</h1>
      <p className="text-[#111]/40 text-sm mb-7">Fill in your details below</p>

      {/* Google */}
      <button className="btn-g mb-4" onClick={() => window.location.href = 'verify.html'}>
        <svg width="17" height="17" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Continue with Google
      </button>

      <div className="div-or text-xs text-[#111]/30 font-medium mb-5">or fill in details</div>

      <form onSubmit={onSubmit} noValidate>
        <div className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="lbl text-black">Full name</label>
            <div className="inp-wrap">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <input className={`inp ${errors?.name ? 'err' : ''}`} name="name" type="text" placeholder="Aryan Kapoor" value={formData.name} onChange={handleInputChange} autoComplete="name"/>
            </div>
            <div className="ferr" style={{ display: errors.name ? 'flex' : 'none' }}>
              <svg className="w-4 h-4 text-[#EF4444]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors.name}</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="lbl">University email</label>
            <div className="inp-wrap">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <input className={`inp ${errors?.email ? 'err' : ''}`} name="email" type="email" placeholder="you@university.edu" value={formData.email} onChange={handleInputChange} autoComplete="email"/>
            </div>
            <div className="ferr" style={{ display: errors?.email ? 'flex' : 'none' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors?.email}</span>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="lbl">Phone number</label>
            <div className="inp-wrap">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="pfx">+91</span>
              <input className={`inp pr ${errors?.phone ? 'err' : ''}`} name="phone" type="tel" placeholder="98765 43210" maxLength="10" value={formData.phone} onChange={handleInputChange} inputMode="numeric"/>
            </div>
            <div className="ferr" style={{ display: errors?.phone ? 'flex' : 'none' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors?.phone}</span>
            </div>
          </div>

          {/* College */}
          <div>
            <label className="lbl">College / University</label>
            <div className="inp-wrap">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <input className={`inp ${errors?.college ? 'err' : ''}`} name="college" type="text" placeholder="IIT Bombay" value={formData.college} onChange={handleInputChange} autoComplete="organization"/>
            </div>
            <div className="ferr" style={{ display: errors?.college ? 'flex' : 'none' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors?.college}</span>
            </div>
          </div>

          {/* Student ID number */}
          <div>
            <label className="lbl">Student ID number</label>
            <div className="inp-wrap">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <input className={`inp ${errors.sid ? 'err' : ''}`} name="sid" type="text" placeholder="21B030012" value={formData?.sid} onChange={handleInputChange} autoComplete="off"/>
            </div>
            <div className="ferr" style={{ display: errors.sid ? 'flex' : 'none' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors.sid}</span>
            </div>
          </div>

          {/* Student ID photo upload */}
          <div>
            <label className="lbl">Student ID photo</label>
            <div
              id="upload-zone"
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: `2px dashed ${dragOver ? '#3DBDA8' : 'rgba(0,0,0,0.12)'}`,
                borderRadius: '14px',
                padding: '20px 16px',
                background: dragOver ? '#EAF9F7' : '#fff',
                cursor: 'pointer',
                transition: 'all .18s ease'
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input type="file" ref={fileInputRef} accept="image/*,.pdf" className="sr-only" onChange={(e) => onFileUpload(e.target.files[0])} />
              {!uploadedFile ? (
                <div className='text-center'>
                  <svg className="w-8 h-8 text-[#3DBDA8] block mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
                  </svg>
                  <p className="text-sm font-semibold text-[#111]/60 mb-1">Click to upload or drag & drop</p>
                  <p className="text-xs text-[#111]/30">JPG, PNG or PDF · Max 5MB</p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF9F7] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111] truncate">{uploadedFile.name}</p>
                    <p className="text-xs text-[#111]/35">{(uploadedFile.size / 1024).toFixed(0)} KB</p>
                  </div>
                  <button type="button" onClick={clearFile} className="w-7 h-7 rounded-full bg-black/6 flex items-center justify-center hover:bg-black/10 transition-colors">
                    <svg className="w-4 h-4 text-[#111]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className="ferr" style={{ display: errors.idphoto ? 'flex' : 'none' }}>
              <svg className="w-4 h-4 text-[#EF4444]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors.idphoto}</span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="lbl">Password</label>
            <div className="inp-wrap">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
              <input className={`inp ${errors.password ? 'err' : ''}`} style={{ paddingRight: '42px' }} name="password" type={showPassword ? 'text' : 'password'} placeholder="Min 8 characters" value={formData.password} onChange={handleInputChange} autoComplete="new-password" />
              <button type="button" className="i-r" onClick={() => setShowPassword(!showPassword)}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  {showPassword ? (
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92 1.11-1.11L3.51 2.3 2.4 3.41l1.42 1.42C2.96 6.39 2.73 8.22 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42 1.11-1.11L12 7zM12 17c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 2.21 1.79 4 4 4 .2 0 .39-.03.57-.07l1.57 1.57c-.64.31-1.37.49-2.14.49zm2.07-7.75c-.12-.06-.25-.1-.39-.1-1.1 0-2 .9-2 2 0 .14.04.27.1.39l1.49 1.49zM12 4.5c5 0 9.27 3.11 11 7.5-.23.63-.52 1.23-.85 1.78l-1.48-1.48c.23-.41.44-.85.62-1.3C19.27 7.61 15 4.5 10 4.5c-.71 0-1.4.08-2.06.24l1.48 1.48c.55-.23.99-.44 1.4-.62zM12 4.5c5 0 9.27 3.11 11 7.5-.23.63-.52 1.23-.85 1.78l-1.48-1.48c.23-.41.44-.85.62-1.3C19.27 7.61 15 4.5 10 4.5c-.71 0-1.4.08-2.06.24l1.48 1.48c.55-.23.99-.44 1.4-.62z"/>
                  ) : (
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  )}
                </svg>
              </button>
            </div>
            {/* Strength */}
            <div className="flex gap-1 mt-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`sbar flex-1 ${strength > i ? strengthColors[strength] : ''}`}></div>
              ))}
            </div>
            <p className="text-[11px] mt-1" style={{ color: 'rgba(0,0,0,.3)' }}>{strengthLabels[strength]}</p>
            <div className="ferr" style={{ display: errors.password ? 'flex' : 'none' }}>
              <svg className="w-4 h-4 text-[#EF4444]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <span>{errors.password}</span>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <div className="relative shrink-0 mt-0.5">
              <input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="peer sr-only" />
              <div className="w-4 h-4 rounded border-[1.5px] border-black/20 bg-white peer-checked:bg-[#F07B3A] peer-checked:border-[#F07B3A] transition-all flex items-center justify-center">
                <svg className="w-3 h-3 text-white hidden peer-checked:block" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>
            <span className="text-xs text-[#111]/45 leading-relaxed">I agree to the <a href="#" className="text-[#F07B3A] font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-[#F07B3A] font-semibold hover:underline">Privacy Policy</a></span>
          </label>
          <div className="ferr" style={{ display: errors.terms ? 'flex' : 'none' }}>
            <svg className="w-4 h-4 text-[#EF4444]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span>{errors.terms}</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white transition-all hover:-translate-y-0.5`}
            style={{ backgroundColor: selectedRole ? roleConfig[selectedRole].bg : '#E2E8F0' }}
            disabled={loading}
          >
            {loading ? (
              <span className="w-4 h-4 rounded-full border-2 border-white/3 border-t-white animate-spin"></span>
            ) : (
              <>
                Create account
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </>
            )}
          </button>

        </div>
      </form>

      <p className="text-center text-xs text-[#111]/30 mt-5">
        Already have an account? <span onClick={() => navigate('/login')} className="text-[#F07B3A] font-semibold hover:underline cursor-pointer">Log in</span>
      </p>

    </div>
  );
};

export default SignupFormStep;
