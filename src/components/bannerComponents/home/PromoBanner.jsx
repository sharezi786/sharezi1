const PromoBanner = () => {
  return (
    <div className="promo mb-6 u1 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#F07B3A] text-xs font-bold tracking-widest uppercase mb-1.5">Limited time</p>
          <h2 className="text-white text-xl sm:text-2xl mb-1">Free rides this week! 🎉</h2>
          <p className="text-white/45 text-xs leading-relaxed max-w-[220px]">First 3 rides are on us. Invite a friend and get ₹50 each.</p>
        </div>
        <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#F07B3A]/15 border border-[#F07B3A]/20 flex items-center justify-center">
          <svg className="w-8 h-8" style={{color:'#F07B3A'}} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
      </div>
      <button className="mt-4 h-9 px-5 rounded-xl text-xs font-bold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-1.5">
        Claim offer <svg className="w-3.5 h-3.5" style={{color:'#fff'}} viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
      </button>
    </div>
  );
};

export default PromoBanner;
