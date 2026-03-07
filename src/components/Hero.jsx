import React from 'react';

const Hero = ({ navigate }) => {
  return (
    <div className="flex-1 flex items-center justify-center px-5 sm:px-8 py-10">
      <div className="w-full max-w-[460px] text-center">
        <h1 className="text-3xl text-[#111] mb-4">Join the Campus Community</h1>
        <p className="text-[#111]/40 text-sm mb-8">Connect with fellow students for rides and food sharing.</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate('/login')} className="flex-1 h-[50px] border border-black/10 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-white hover:border-black/18 transition-colors">
            Log in
          </button>
          <button onClick={() => navigate('/signup')} className="flex-1 h-[50px] bg-[#3DBDA8] rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white hover:bg-[#2AA898] transition-all shadow-[0_4px_16px_rgba(61,189,168,.28)] hover:shadow-[0_8px_24px_rgba(61,189,168,.38)] hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
