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
          <p className="text-[#111]/50 text-sm leading-relaxed max-w-md mb-8">Connect with verified students going the same route. Split costs, reduce carbon footprint, and build your campus network.</p>
          <button className="btn-glow text-sm font-bold px-6 py-3 rounded-xl">Find a ride</button>
        </div>
        <div className="relative">
          <div className="bg-white border border-black/7 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-[#111] font-semibold">Available Rides</h3>
              <svg className="w-5 h-5 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#F7F7F5] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold text-xs">A</div>
                  <div>
                    <p className="text-[#111] text-sm font-medium">Andheri Station</p>
                    <p className="text-[#111]/50 text-xs">2 seats • ₹45</p>
                  </div>
                </div>
                <button className="text-[#3DBDA8] text-sm font-semibold">Join</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F7F7F5] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white font-bold text-xs">B</div>
                  <div>
                    <p className="text-[#111] text-sm font-medium">Bandra West</p>
                    <p className="text-[#111]/50 text-xs">1 seat • ₹60</p>
                  </div>
                </div>
                <button className="text-[#3DBDA8] text-sm font-semibold">Join</button>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F07B3A] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1l-1.5 4v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9.85l-.08-.24L18.92 6.01zM6.5 7.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm11 0c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM17 12H7V9h10v3z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideSection;
