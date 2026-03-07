import { useState, useEffect } from "react";

const TopNav = ({ greeting }) => {
  return (
    <nav id="top-nav" className="shrink-0 px-4 sm:px-6 h-16 flex items-center justify-between z-20 relative">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold text-sm shrink-0">A</div>
        <div>
          <p className="text-xs text-[#111]/40 font-medium">{greeting} 👋</p>
          <p className="font-bold text-sm text-[#111]" style={{fontFamily:'Syne'}}>Aryan Kapoor</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* Verified badge */}
        <div className="verified-badge hidden sm:inline-flex">
          <svg className="w-3.5 h-3.5" style={{color:'#3DBDA8'}} viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Verified Student
        </div>
        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-xl bg-white border border-black/8 flex items-center justify-center hover:bg-[#F7F7F5] transition-colors">
          <svg className="w-5 h-5" style={{color:'#111'}} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          <span className="notif-dot"></span>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
