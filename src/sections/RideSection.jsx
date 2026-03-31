import React from 'react';

const RideSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white section-divider" id="rides">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="section-label text-[#F07B3A] mb-3 block">Ride Sharing</span>
          <h2 className="text-4xl sm:text-5xl text-[#111] leading-tight mb-5">
            Share rides,<br/><span className="grad-orange">not strangers</span>
          </h2>
          <p className="text-[#111]/50 text-base mb-8 leading-relaxed">Every driver and passenger is a verified student from your college. Real-time tracking, in-app chat, transparent pricing — like Rapido, but campus-exclusive.</p>
          
          <div className="flex flex-col gap-4">
            <FeatureCard 
              icon="location_on"
              bgColor="#FFF3EC"
              borderColor="#F07B3A"
              iconColor="#F07B3A"
              title="Real-time GPS tracking"
              description="Know exactly where your ride is — share live location with family."
            />
            <FeatureCard 
              icon="verified_user"
              bgColor="#EAF9F7"
              borderColor="#3DBDA8"
              iconColor="#3DBDA8"
              title="Verified students only"
              description="ID-verified profiles, college-filtered matching. No randoms."
            />
            <FeatureCard 
              icon="price_check"
              bgColor="#FFF3EC"
              borderColor="#F07B3A"
              iconColor="#F07B3A"
              title="Transparent pricing"
              description="See total cost + split before you book. No surge pricing."
            />
          </div>
        </div>

        <RideCard />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, bgColor, borderColor, iconColor, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div 
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border"
        style={{ backgroundColor: bgColor, borderColor: `${borderColor}15` }}
      >
        <span 
          className="icon" 
          style={{ fontSize: '18px', color: iconColor }}
        >
          {icon}
        </span>
      </div>
      <div>
        <p className="text-[#111] font-semibold text-sm mb-0.5">{title}</p>
        <p className="text-[#111]/45 text-sm">{description}</p>
      </div>
    </div>
  );
};

const RideCard = () => {
  return (
    <div className="bg-[#F7F7F5] rounded-3xl border border-black/7 overflow-hidden shadow-sm p-5">
      <MapPlaceholder />
      
      <DriverInfo />
      
      <RouteInfo />
      
      <BookingActions />
    </div>
  );
};

const MapPlaceholder = () => {
  return (
    <div className="relative bg-[#E8F0F8] rounded-2xl h-44 mb-4 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-30">
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(61,189,168,0.5)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
      
      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 300 176" preserveAspectRatio="none">
        <path 
          d="M 40 140 Q 80 100 120 80 Q 160 60 200 50 Q 240 40 260 30" 
          fill="none" 
          stroke="#F07B3A" 
          strokeWidth="2.5" 
          strokeDasharray="6,3" 
          opacity="0.8"
        />
      </svg>
      
      <LocationMarker label="A" color="#3DBDA8" position="bottom-7 left-8" />
      <LocationMarker label="B" color="#F07B3A" position="top-5 right-8" />
    </div>
  );
};

const LocationMarker = ({ label, color, position }) => {
  return (
    <div className={`absolute ${position} flex flex-col items-center`}>
      <div 
        className="w-3 h-3 rounded-full map-ping" 
        style={{ backgroundColor: color }}
      />
      <div 
        className="text-white text-[9px] font-bold px-1.5 py-0.5 rounded mt-1" 
        style={{ backgroundColor: color }}
      >
        {label}
      </div>
    </div>
  );
};

const DriverInfo = () => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-11 h-11 rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold shrink-0">
        K
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-[#111] font-semibold text-sm">Karan M.</p>
          <span className="star text-[10px]">★</span>
          <span className="text-[#111]/70 text-[10px] font-semibold">4.9</span>
        </div>
        <p className="text-[#111]/45 text-xs">Honda Activa · MH02 AZ 4521</p>
      </div>
      <div className="text-right">
        <p className="text-[#F07B3A] font-bold text-sm">₹55</p>
        <p className="text-[#111]/35 text-[10px]">per seat</p>
      </div>
    </div>
  );
};

const RouteInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="bg-white border border-black/7 rounded-xl px-3 py-2">
        <p className="text-[#111]/35 text-[9px] uppercase tracking-widest mb-0.5">From</p>
        <p className="text-[#111] text-xs font-semibold">IITB Gate 1</p>
      </div>
      <div className="bg-white border border-black/7 rounded-xl px-3 py-2">
        <p className="text-[#111]/35 text-[9px] uppercase tracking-widest mb-0.5">To</p>
        <p className="text-[#111] text-xs font-semibold">Andheri Station</p>
      </div>
    </div>
  );
};

const BookingActions = () => {
  return (
    <div className="flex gap-2">
      <div className="flex-1 bg-white border border-black/7 rounded-xl px-3 py-2 text-center">
        <p className="text-[#111]/35 text-[9px]">Seats left</p>
        <p className="text-[#3DBDA8] font-bold text-sm">2 / 4</p>
      </div>
      <div className="flex-1 bg-white border border-black/7 rounded-xl px-3 py-2 text-center">
        <p className="text-[#111]/35 text-[9px]">ETA</p>
        <p className="text-[#111] font-bold text-sm">4 min</p>
      </div>
      <button 
        className="flex-1 btn-glow text-sm font-bold rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Book this ride now"
      >
        Book now
      </button>
    </div>
  );
};

export default RideSection;
