import React from 'react';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, navigate }) => {
  const navItems = [
    { href: "#how", text: "How it works" },
    { href: "#rides", text: "Rides" },
    { href: "#food", text: "Food" },
    { href: "#safety", text: "Safety" }
  ];

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#F07B3A] flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <span style={{fontFamily:'Syne',sansSerif:true, fontWeight:800}} className="text-lg text-[#111]">Sharezi</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#111]/55">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="hover:text-[#111] transition-colors">{item.text}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => navigate('/login')} className="btn-teal text-sm px-5 py-2 rounded-xl">Log in</button>
          <button onClick={() => navigate('/signup')} className="btn-glow text-sm font-bold px-5 py-2 rounded-xl">Get started</button>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#111]/60 hover:text-[#111] p-1" aria-label="Menu">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div id="mobileMenu" className={mobileMenuOpen ? 'open' : ''}>
        <div className="px-4 pb-5 flex flex-col gap-1 border-t border-black/6">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-[#111]/60 hover:text-[#111] py-2.5 text-sm font-medium">{item.text}</a>
          ))}
          <div className="flex gap-2 pt-2">
            <button onClick={() => navigate('/login')} className="flex-1 text-sm bg-white border border-black/10 rounded-xl py-3 font-semibold text-[#111] hover:bg-black/5 transition-colors">Log in</button>
            <button onClick={() => navigate('/signup')} className="flex-1 text-sm bg-[#3DBDA8] rounded-xl py-3 font-bold text-white hover:bg-[#2AA898] transition-colors">Get started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
