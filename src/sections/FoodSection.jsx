import React from 'react';

const FoodSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F7F7F5] section-divider" id="food">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-white border border-black/7 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-[#111] font-semibold">Food Orders</h3>
              <svg className="w-5 h-5 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
              </svg>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#F7F7F5] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white font-bold text-xs">P</div>
                  <div>
                    <p className="text-[#111] text-sm font-medium">Paneer Tikka Masala</p>
                    <p className="text-[#111]/50 text-xs">2 joined • ₹120 total</p>
                  </div>
                </div>
                <button className="text-[#3DBDA8] text-sm font-semibold">Join</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F7F7F5] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold text-xs">B</div>
                  <div>
                    <p className="text-[#111] text-sm font-medium">Burger & Fries</p>
                    <p className="text-[#111]/50 text-xs">1 joined • ₹85 total</p>
                  </div>
                </div>
                <button className="text-[#3DBDA8] text-sm font-semibold">Join</button>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#3DBDA8] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
            </svg>
          </div>
        </div>
        <div>
          <span className="section-label text-[#3DBDA8] mb-3 block">Food Sharing</span>
          <h2 className="text-4xl sm:text-5xl text-[#111] leading-tight mb-5">
            Split the bill,<br/><span className="grad-teal">save on delivery</span>
          </h2>
          <p className="text-[#111]/50 text-sm leading-relaxed max-w-md mb-8">Post your food order and let fellow students join. No more paying full delivery fees alone — share the cost and the meal.</p>
          <button className="btn-teal text-sm font-bold px-6 py-3 rounded-xl">Browse food</button>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
