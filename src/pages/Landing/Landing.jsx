import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Landing.css';
import '../../Landing.css';
import Navbar from '../../components/Navbar';
// import Hero from '../../components/Hero';
// import Stats from '../../components/Stats';
import SafetyCard from '../../components/SafetyCard';
import TestimonialCard from '../../components/TestimonialCard';
import RideSection from '../../sections/RideSection';
import FoodSection from '../../sections/FoodSection';
import CTA from '../../sections/CTA';
import Footer from '../../components/Footer';
import PhoneMockup from '../../components/PhoneMockup';

const Landing = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const safetyFeatures = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.18L12 2.96 8.6 1.52 6.71 4.7 3.1 5.52l.34 3.69L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.18L12 21.04l3.4 1.44 1.89-3.18 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 6.4-6.4 1.48 1.48-7.88 7.88z"/>
        </svg>
      ),
      title: "Student ID Verified",
      desc: "Every user uploads a valid student ID. Our team reviews manually within 24h.",
      bgColor: "#FFF3EC",
      borderColor: "#F07B3A"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.49-1.73-2.11-2.96-3.84-3.22-.62-.08-.74-.29-.74-.49 0-.29.29-.55.55-.55.96 0 1.78.84 1.78 1.78 0 .49-.39.89-.89.89-.39 0-.72-.32-.72-.72 0-.16.13-.28.28-.28.15 0 .28.13.28.28 0 .15-.13.28-.28.28-.04 0-.08-.01-.12-.01-.04 0-.08.01-.12.01-.39 0-.72.32-.72.72 0 .39.32.72.72.72.89 0 1.78-.89 1.78-1.78 0-.96-.82-1.78-1.78-1.78-.26 0-.55.26-.55.55 0 .2.12.41.74.49 1.73.26 3.35 1.49 3.84 3.22.23.82.71 1.48 1.28 1.96L12 21.96l-9.94-9.94c.57-.48 1.05-1.14 1.28-1.96.49-1.73 2.11-2.96 3.84-3.22.62-.08.74-.29.74-.49 0-.29-.29-.55-.55-.55-.96 0-1.78.84-1.78 1.78 0 .49.39.89.89.89.39 0 .72-.32.72-.72 0-.16-.13-.28-.28-.28-.15 0-.28.13-.28.28 0 .15.13.28.28.28.04 0 .08-.01.12-.01.04 0 .08.01.12.01.39 0 .72-.32.72-.72 0-.39-.32-.72-.72-.72-.89 0-1.78.89-1.78 1.78 0 .96.82 1.78 1.78 1.78.26 0 .55-.26.55-.55 0-.2-.12-.41-.74-.49-1.73-.26-3.35-1.49-3.84-3.22-.23-.82-.71-1.48-1.28-1.96L12 2.04l9.94 9.94c-.57.48-1.05 1.14-1.28 1.96z"/>
        </svg>
      ),
      title: "Live GPS Tracking",
      desc: "Share your live location with trusted contacts during any ride.",
      bgColor: "#EAF9F7",
      borderColor: "#3DBDA8"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2v-2h-2V7h-2V5h-2V3h-2V1zm0 6h2v2h-2V7zm0 4h2v2h-2v11zm-4-4h2v2H9V7zm0 4h2v2H9v11z"/>
        </svg>
      ),
      title: "SOS Emergency",
      desc: "One-tap SOS alerts your emergency contacts with your current location.",
      bgColor: "#FFF3EC",
      borderColor: "#F07B3A"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
        </svg>
      ),
      title: "In-app Chat Only",
      desc: "No personal numbers shared. All communication stays inside the app.",
      bgColor: "#EAF9F7",
      borderColor: "#3DBDA8"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ),
      title: "Mutual Ratings",
      desc: "Both riders and drivers rate each other. Low scores = automatic suspension.",
      bgColor: "#FFF3EC",
      borderColor: "#F07B3A"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16c2.76 0 5-2.24 5-5V9h-2v3c0 1.66-1.34 3-3 3s-3-1.34-3-3V9H7v3c0 2.76 2.24 5 5 5zm6-10v1h-2V7h2z"/>
        </svg>
      ),
      title: "24/7 Support",
      desc: "Campus support team available for any incident reports or disputes.",
      bgColor: "#EAF9F7",
      borderColor: "#3DBDA8"
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const scrollHandler = () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 90) cur = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + cur ? '#111' : '';
      });
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className="relative">

      {/* NAV */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navigate={navigate} />

      {/* HERO */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center overflow-hidden bg-[#F7F7F5]">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal delay-1 inline-flex items-center gap-2 bg-[#111]/5 border border-[#111]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111]/70 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DBDA8] badge-pulse"></span>
                Campus-only verified platform
              </div>
              <h1 className="leading-[1.05] mb-5 reveal delay-2">
                <span className="text-5xl sm:text-6xl lg:text-[68px] text-[#111] block">Campus rides.</span>
                <span className="text-5xl sm:text-6xl lg:text-[68px] block grad-orange">Food deals.</span>
                <span className="text-5xl sm:text-6xl lg:text-[68px] text-[#111] block">One app.</span>
              </h1>
              <p className="reveal delay-3 text-base sm:text-lg text-[#111]/50 max-w-md mb-9 leading-relaxed">
                Share rides to campus, split food from your favourite joints — all with verified students from your college only. Safer, cheaper, and way more social.
              </p>
              <div className="reveal delay-4 flex flex-wrap gap-3 mb-10">
                <button onClick={() => navigate('/signup')} className="btn-glow font-bold text-sm px-7 py-3.5 rounded-2xl inline-flex items-center gap-2">
                  Start for free
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
                <a href="#how" className="btn-teal text-sm px-7 py-3.5 rounded-2xl inline-flex items-center gap-2 hover:bg-transparent">
                  <svg className="w-4 h-4 text-[#2A9E8C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  See how it works
                </a>
              </div>
              <div className="reveal delay-5 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  <div className="w-9 h-9 rounded-full avatar-ring bg-[#F07B3A] flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div className="w-9 h-9 rounded-full avatar-ring bg-[#3DBDA8] flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div className="w-9 h-9 rounded-full avatar-ring bg-[#8B5CF6] flex items-center justify-center text-white text-xs font-bold">S</div>
                  <div className="w-9 h-9 rounded-full avatar-ring bg-[#EF4444] flex items-center justify-center text-white text-xs font-bold">M</div>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                  </div>
                  <p className="text-xs text-[#111]/45"><strong className="text-[#111]/70">2,400+</strong> students already sharing</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end reveal delay-3">
              {/* <Hero navigate={navigate} /> */}
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-black/7 bg-white py-3 overflow-hidden">
        <div className="ticker-inner text-sm font-semibold text-[#111]/40 gap-10 flex">
          <span>🚗 Campus Rides</span><span className="text-[#F07B3A]">✦</span>
          <span>🍔 Food Sharing</span><span className="text-[#3DBDA8]">✦</span>
          <span>🎓 Students Only</span><span className="text-[#F07B3A]">✦</span>
          <span>✅ Verified IDs</span><span className="text-[#3DBDA8]">✦</span>
          <span>💸 Split Costs</span><span className="text-[#F07B3A]">✦</span>
          <span>📍 Real-time Tracking</span><span className="text-[#3DBDA8]">✦</span>
          <span>🔒 Safe &amp; Secure</span><span className="text-[#F07B3A]">✦</span>
          <span>⭐ Rated 4.9/5</span><span className="text-[#3DBDA8]">✦</span>
          <span>🚗 Campus Rides</span><span className="text-[#F07B3A]">✦</span>
          <span>🍔 Food Sharing</span><span className="text-[#3DBDA8]">✦</span>
          <span>🎓 Students Only</span><span className="text-[#F07B3A]">✦</span>
          <span>✅ Verified IDs</span><span className="text-[#3DBDA8]">✦</span>
          <span>💸 Split Costs</span><span className="text-[#F07B3A]">✦</span>
          <span>📍 Real-time Tracking</span><span className="text-[#3DBDA8]">✦</span>
          <span>🔒 Safe &amp; Secure</span><span className="text-[#F07B3A]">✦</span>
          <span>⭐ Rated 4.9/5</span><span className="text-[#3DBDA8]">✦</span>
        </div>
      </div>

      {/* STATS */}
      <section className="py-14 px-4 sm:px-6 bg-white section-divider">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-black/8">
          <div className="text-center px-6">
            <p style={{fontFamily:'Syne', fontWeight:800}} className="text-4xl sm:text-5xl grad-orange mb-1">2.4K+</p>
            <p className="text-[#111]/45 text-sm">Verified students</p>
          </div>
          <div className="text-center px-6">
            <p style={{fontFamily:'Syne', fontWeight:800}} className="text-4xl sm:text-5xl grad-teal mb-1">18K+</p>
            <p className="text-[#111]/45 text-sm">Rides completed</p>
          </div>
          <div className="text-center px-6">
            <p style={{fontFamily:'Syne', fontWeight:800}} className="text-4xl sm:text-5xl grad-orange mb-1">₹12L</p>
            <p className="text-[#111]/45 text-sm">Saved on travel</p>
          </div>
          <div className="text-center px-6">
            <p style={{fontFamily:'Syne', fontWeight:800}} className="text-4xl sm:text-5xl grad-teal mb-1">4.9★</p>
            <p className="text-[#111]/45 text-sm">Average rating</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 sm:px-6 bg-[#F7F7F5] section-divider" id="how">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <h2 className="text-4xl sm:text-5xl text-[#111] leading-tight">
              Three steps to<br/><span className="grad-teal">save &amp; share</span>
            </h2>
          </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="card-lift relative bg-white border border-black/7 rounded-3xl p-7 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF3EC] border border-[#F07B3A]/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>
                <div className="absolute top-7 right-7 text-[#111]/15 text-xs font-bold">01</div>
                <h3 className="text-lg text-[#111] mb-2">Verify your ID</h3>
                <p className="text-[#111]/50 text-sm leading-relaxed">Upload your student ID and university email. We verify within 24 hours — one-time only.</p>
              </div>
              <div className="card-lift relative bg-white border border-black/7 rounded-3xl p-7 shadow-sm md:mt-8">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF9F7] border border-[#3DBDA8]/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#3DBDA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <div className="absolute top-7 right-7 text-[#111]/15 text-xs font-bold">02</div>
                <h3 className="text-lg text-[#111] mb-2">Find rides or food</h3>
                <p className="text-[#111]/50 text-sm leading-relaxed">Browse rides going your route or food deals near you — filtered to your campus.</p>
              </div>
              <div className="card-lift relative bg-white border border-black/7 rounded-3xl p-7 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF3EC] border border-[#F07B3A]/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <div className="absolute top-7 right-7 text-[#111]/15 text-xs font-bold">03</div>
                <h3 className="text-lg text-[#111] mb-2">Split &amp; save</h3>
                <p className="text-[#111]/50 text-sm leading-relaxed">Pay your share via UPI. Track in real-time. Rate after — build campus trust.</p>
              </div>
            </div>
        </div>
      </section>

      {/* RIDES SECTION */}
      <RideSection />

      {/* FOOD SECTION */}
      <FoodSection />

      {/* SAFETY */}
      <SafetyCard />

      {/* TESTIMONIALS */}
      <TestimonialCard />

      {/* CTA BANNER */}
      <CTA />

      {/* FOOTER */}
      <Footer/>
    </div>
  );
};

export default Landing;
