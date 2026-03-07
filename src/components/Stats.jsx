import React from 'react';

const Stats = () => {
  return (
    <div className="left-dark hidden lg:flex lg:w-[400px] xl:w-[460px] flex-col justify-between p-10 xl:p-14 shrink-0 sticky top-0" style={{height:'calc(100vh - 64px)'}}>
      <div>
        <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white/55 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3DBDA8]" style={{boxShadow:'0 0 0 3px rgba(61,189,168,.25)'}}></span>
          Campus-verified platform
        </div>
        <h2 className="text-4xl xl:text-5xl text-white leading-[1.1] mb-5">
          Welcome to<br/><span style={{background:'linear-gradient(135deg,#F5A54A,#F07B3A)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>Sharezi.</span>
        </h2>
        <p className="text-white/40 text-sm leading-relaxed max-w-xs">Your campus community for rides and food — verified students only.</p>
      </div>
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
  );
};

export default Stats;
