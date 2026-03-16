import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 sm:px-6 bg-white section-divider">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#111] rounded-3xl overflow-hidden p-10 sm:p-14 text-center">
          <svg className="w-12 h-12 text-[#F07B3A] mb-4 block" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
          <h2 className="text-3xl sm:text-4xl text-white leading-tight mb-4">
            Ready to join your<br/><span className="text-[#F07B3A]">campus community?</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">Download the app and start connecting with verified students for rides and food sharing.</p>
          <button className="btn-glow text-sm font-bold px-8 py-4 rounded-xl" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
