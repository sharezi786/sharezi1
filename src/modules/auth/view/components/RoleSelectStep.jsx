import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelectStep = ({ selectedRole, onSelectRole, onContinue, roleConfig }) => {
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    navigate('/verify');
  };

  const iconPaths = {
    student: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
    driver: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z',
    admin: 'M17 11c.34 0 .67.04 1 .11V6.85c0-.59-.21-1.15-.58-1.59l-1.59-1.9c-.27-.32-.69-.51-1.13-.51H8.28c-.44 0-.86.19-1.13.51L5.58 5.26c-.37.44-.58 1-.58 1.59v4.26c.33-.07.66-.11 1-.11h10zM8.5 5.36c.26-.31.69-.5 1.13-.5h4.74c.44 0 .87.19 1.13.5l.78.93H7.72l.78-.93zM17 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2v-2c0-.28.22-.5.5-.5s.5.22-.5.5v2h2c.28 0 .5.22.5.5s-.22.5-.5.5z'
  };

  const selClass = {
    student: 'sel-s',
    driver: 'sel-d',
    admin: 'sel-a'
  };

  return (
    <div
      id=""
      className="opacity-100 transform translate-x-0 transition-opacity duration-300 ease-out transition-transform duration-300 ease-out"
    >
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-[#111]/30 tracking-widest uppercase mb-3">
          Step 1 of 3
        </p>
        <h1 className="text-3xl sm:text-4xl text-[#111] mb-2">
          Join Campus Share-All
        </h1>
        <p className="text-[#111]/45 text-sm">
          Choose your role to get started
        </p>
      </div>

      {/* 3 role cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {Object.entries(roleConfig).map(([key, config]) => (
          <div
            key={key}
            className={`rcard ${selectedRole === key ? selClass[key] : ""}`}
            onClick={() => onSelectRole(key)}
          >
            <div className="tick">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-3`}
              style={{ backgroundColor: `${config.bg}20` }}
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: config.bg }}
              >
                <path d={iconPaths[key]} />
              </svg>
            </div>
            <p className="font-bold text-sm text-[#111] mb-1">{config.label}</p>
            <p className="text-[10px] text-[#111]/40 leading-relaxed">
              {config.hint.split(",")[0]}
            </p>
          </div>
        ))}
      </div>

      {/* Role hint */}
      <p className="text-center text-xs text-[#111]/35 mb-5 min-h-[18px]">
        {selectedRole ? roleConfig[selectedRole].hint : ""}
      </p>

      {/* Continue */}
      <div>
        <button
          className={`w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5`}
          style={{
            backgroundColor: selectedRole ? roleConfig[selectedRole].bg : '#E2E8F0',
            color: selectedRole ? 'white' : '#94A3B8',
            cursor: selectedRole ? 'pointer' : 'not-allowed'
          }}
          onClick={onContinue}
          disabled={!selectedRole}
        >
          {selectedRole
            ? `Continue as ${roleConfig[selectedRole].label}`
            : "Select a role to continue"}
          {selectedRole && (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          )}
        </button>
      </div>

      <div className="div-or text-xs text-[#111]/30 font-medium my-5">
        <span className="relative px-3">or</span>
      </div>

      <div>
        <button className="btn-g" onClick={handleGoogleSignup}>
          <svg width="17" height="17" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default RoleSelectStep;
