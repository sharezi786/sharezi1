import React from 'react';

const TestimonialCard = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F7F7F5] section-divider">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label text-[#F07B3A] mb-3 block">From students</span>
          <h2 className="text-4xl sm:text-5xl text-[#111]">They love it 🧡</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card-lift bg-white border border-black/7 rounded-3xl p-6 shadow-sm">
            <div className="flex gap-0.5 mb-4"><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span></div>
            <p className="text-[#111]/60 text-sm leading-relaxed mb-5">"Saved ₹3,000+ last semester just by sharing rides to Andheri station. Everyone I rode with was from my college — felt totally safe."</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold text-sm">P</div>
              <div>
                <p className="text-[#111] text-sm font-semibold">Priya N.</p>
                <p className="text-[#111]/35 text-xs">B.Tech 3rd Year, IITB</p>
              </div>
            </div>
          </div>
          <div className="card-lift bg-white border border-black/7 rounded-3xl p-6 shadow-sm">
            <div className="flex gap-0.5 mb-4"><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span></div>
            <p className="text-[#111]/60 text-sm leading-relaxed mb-5">"I post a food order at 11pm and within 5 mins 3 people join. Delivery fee went from ₹60 to ₹15 each. Game changer for hostel life."</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white font-bold text-sm">A</div>
              <div>
                <p className="text-[#111] text-sm font-semibold">Aryan K.</p>
                <p className="text-[#111]/35 text-xs">MBA Year 1, NMIMS</p>
              </div>
            </div>
          </div>
          <div className="card-lift bg-white border border-black/7 rounded-3xl p-6 shadow-sm">
            <div className="flex gap-0.5 mb-4"><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span></div>
            <p className="text-[#111]/60 text-sm leading-relaxed mb-5">"As a driver, I cover my petrol costs easily. It's not about money — it's knowing you're helping a batchmate and they're helping you back."</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">R</div>
              <div>
                <p className="text-[#111] text-sm font-semibold">Rohan M.</p>
                <p className="text-[#111]/35 text-xs">B.Com Final Year, HR College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
