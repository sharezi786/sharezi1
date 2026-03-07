import React from 'react'

const PhoneMockup = () => {
  return (
    <div className="relative flex justify-center lg:justify-end reveal delay-3">
      <div className="relative">

        {/* Phone Frame */}
        <div className="phone-float relative w-[270px] sm:w-[300px] bg-[#1A1A1A] rounded-[42px] border border-black/20 shadow-[0_32px_64px_rgba(0,0,0,0.18)] overflow-hidden aspect-[9/19]">
          
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

          {/* Screen */}
          <div className="absolute inset-0 bg-[#111] overflow-hidden">
            
            {/* Header */}
            <div className="px-5 pt-14 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-[10px]">Good morning 👋</p>
                  <p className="text-white font-bold text-base font-sans">
                    Aryan
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F07B3A] flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="mx-4 bg-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2 mb-4">
              <span className="text-white/30 text-[11px]">
                🔍 Where are you going?
              </span>
            </div>

            {/* Quick Tiles */}
            <div className="px-4 grid grid-cols-2 gap-2 mb-4">

              <div className="bg-[#F07B3A]/15 border border-[#F07B3A]/20 rounded-2xl p-3">
                <div className="w-7 h-7 rounded-xl bg-[#F07B3A]/20 flex items-center justify-center mb-2 text-[#F07B3A]">
                  ⏱
                </div>
                <p className="text-white/80 text-[11px] font-semibold">
                  Find Ride
                </p>
                <p className="text-white/40 text-[9px]">
                  2 nearby
                </p>
              </div>

              <div className="bg-[#3DBDA8]/15 border border-[#3DBDA8]/20 rounded-2xl p-3">
                <div className="w-7 h-7 rounded-xl bg-[#3DBDA8]/20 flex items-center justify-center mb-2 text-[#3DBDA8]">
                  🍔
                </div>
                <p className="text-white/80 text-[11px] font-semibold">
                  Order Food
                </p>
                <p className="text-white/40 text-[9px]">
                  5 open now
                </p>
              </div>

            </div>

            {/* Ride List */}
            <div className="px-4">
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-semibold mb-2">
                Nearby Rides
              </p>

              {/* Ride Item */}
              <div className="bg-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white text-[10px] font-bold">
                  R
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/90 text-[11px] font-semibold">
                    Riya S.
                  </p>
                  <p className="text-white/40 text-[9px] truncate">
                    IITB → Andheri Stn
                  </p>
                </div>
                <span className="bg-[#F07B3A]/15 text-[#F5A54A] text-[10px] px-2 py-1 rounded-full">
                  ₹40
                </span>
              </div>

              <div className="bg-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white text-[10px] font-bold">
                  M
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/90 text-[11px] font-semibold">
                    Mihir P.
                  </p>
                  <p className="text-white/40 text-[9px] truncate">
                    Powai → BKC
                  </p>
                </div>
                <span className="bg-[#3DBDA8]/15 text-[#3DBDA8] text-[10px] px-2 py-1 rounded-full">
                  ₹60
                </span>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#0D0D0D] border-t border-white/10 flex items-center justify-around px-6">
              <div className="flex flex-col items-center text-[#F07B3A]">
                🏠
                <div className="w-1 h-1 bg-[#F07B3A] rounded-full mt-1" />
              </div>
              <span className="text-white/30">⏳</span>
              <span className="text-white/30">❤️</span>
              <span className="text-white/30">👤</span>
            </div>

          </div>
        </div>

        {/* Floating Notification 1 */}
        <div className="absolute -left-10 top-28 bg-white border border-black/10 rounded-2xl px-3 py-2 shadow-lg" style={{animation:'slideUp 0.6s 0.8s both', opacity:0}}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#3DBDA8]/15 flex items-center justify-center text-[#3DBDA8]">
              ✔
            </div>
            <div>
              <p className="text-[#111] text-[10px] font-bold">
                Ride confirmed!
              </p>
              <p className="text-[#111]/40 text-[9px]">
                2 min away
              </p>
            </div>
          </div>
        </div>

        {/* Floating Notification 2 */}
        <div className="absolute -right-8 bottom-36 bg-white border border-black/10 rounded-2xl px-3 py-2 shadow-lg" style={{animation:'slideUp 0.6s 1s both', opacity:0}}>
          <div className="flex items-center gap-2">
            <span className="text-[#F07B3A]">🍕</span>
            <div>
              <p className="text-[#111] text-[10px] font-bold">
                Order on the way
              </p>
              <p className="text-[#111]/40 text-[9px]">
                ₹180 split with 2
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default PhoneMockup