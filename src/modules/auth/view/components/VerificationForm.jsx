import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationForm = () => {
  const navigate = useNavigate();

  const documents = [
    { name: 'Student ID Photo' },
    { name: 'University Email' },
    { name: 'Personal Information' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col relative">
      {/* Navigation */}
      <nav className="shrink-0 px-5 sm:px-8 h-16 flex items-center justify-between border-b border-black/7 bg-white/90 backdrop-blur-md z-20">
        {/* Logo and Navigation Link */}
        <span
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-[#F07B3A] flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <span
            style={{ fontFamily: "Syne", fontWeight: 800 }}
            className="text-[#111] text-lg"
          >
            Sharezi
          </span>
        </span>
        {/* Step indicator */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-[#3DBDA8] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div className="w-8 h-0.5 bg-[#3DBDA8] rounded"></div>
            <div className="w-6 h-6 rounded-full bg-[#3DBDA8] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div className="w-8 h-0.5 bg-black/10 rounded"></div>
            <div className="w-6 h-6 rounded-full bg-black/8 border-2 border-[#F5B942] flex items-center justify-center">
              <span className="text-[10px] font-bold text-[#F5B942]">3</span>
            </div>
          </div>
          <span className="text-xs text-[#111]/35 font-medium ml-1">
            Verification
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-[420px]">
          {/* Clock Icon */}
          <div className="flex justify-center mb-7 u1">
            <div className="clock-wrap w-20 h-20 rounded-full bg-[#FEF9EC] border-2 border-[#F5B942]/30 flex items-center justify-center animate-pulse">
              <span
                className="icon"
                style={{ fontSize: "38px", color: "#F5B942" }}
              >
                schedule
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8 u2">
            <h1 className="text-2xl sm:text-3xl text-[#111] mb-2">
              Verification in Progress
            </h1>
            <p className="text-[#111]/45 text-sm">
              Your student verification is being processed
            </p>
          </div>

          {/* Documents Submitted Card */}
          <div className="bg-white border border-black/7 rounded-2xl p-5 mb-4 u3">
            <p className="font-bold text-sm text-[#111] mb-3">
              Documents Submitted
            </p>
            {documents.map((doc, index) => (
              <div key={index} className="check-item">
                <div className="w-7 h-7 rounded-full bg-[#EAF9F7] border border-[#3DBDA8]/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-[#3DBDA8]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-sm text-[#111]/70">{doc.name}</span>
              </div>
            ))}
          </div>

          {/* What's Next Card */}
          <div className="bg-[#FFFBEC] border border-[#F5B942]/25 rounded-2xl p-5 mb-6 u4">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-[#F5B942]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <p className="font-bold text-sm text-[#111]">What's Next?</p>
            </div>
            <p className="text-sm text-[#111]/55 leading-relaxed mb-2">
              Our team will review your documents within 24–48 hours. You'll
              receive an email once your account is verified.
            </p>
            <p className="text-sm text-[#111]/55 leading-relaxed">
              You can browse the app with limited access until verification is
              complete.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 u5">
            <button
              onClick={() => navigate("/student-home")}
              className="btn-teal"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Browse App (Limited Access)
            </button>
            <button onClick={() => navigate("/")} className="btn-outline">
              Return to Home
            </button>
          </div>

          {/* Support Link */}
          <p className="text-center text-sm text-[#111]/35 mt-6">
            Need help?{" "}
            <a
              href="#"
              className="text-[#3DBDA8] font-semibold hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;