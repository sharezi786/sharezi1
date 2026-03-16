import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/bannerComponents/layout/BottomNav";

const FindRide = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("list");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(200);
  const [radius, setRadius] = useState(2);
  const [from, setFrom] = useState("IITB Gate 1");
  const [to, setTo] = useState("");
  const [selectedTime, setSelectedTime] = useState("any");

  const rides = [
    {
      id: 1,
      name: "Riya S.",
      rating: 4.8,
      vehicle: "Honda Activa · MH02 AZ 1234",
      from: "IITB Gate 1",
      to: "Andheri Station",
      time: "Today, 10:30 AM",
      seats: 2,
      distance: "4 min",
      price: 40,
      gender: "Ladies only",
      prepaid: true,
      avatarColor: "#3DBDA8",
      highlighted: true
    },
    {
      id: 2,
      name: "Karan M.",
      rating: 4.9,
      vehicle: "Honda City · MH04 BZ 9900",
      from: "Powai Lake",
      to: "BKC Metro",
      time: "Today, 11:00 AM",
      seats: 1,
      distance: "8 min",
      price: 55,
      avatarColor: "#8B5CF6"
    },
    {
      id: 3,
      name: "Sneha R.",
      rating: 4.7,
      vehicle: "Scooty Pep · MH03 CR 5678",
      from: "Hiranandani Gardens",
      to: "Vikhroli Station",
      time: "Today, 11:15 AM",
      seats: 3,
      distance: "12 min",
      price: 35,
      prepaid: true,
      avatarColor: "#EF4444"
    },
    {
      id: 4,
      name: "Arjun T.",
      rating: 4.6,
      vehicle: "Swift Dzire · MH01 AB 2233",
      from: "IITB Main Gate",
      to: "Kurla Station",
      time: "Today, 12:00 PM",
      seats: 4,
      distance: "20 min",
      price: 70,
      avatarColor: "#F59E0B"
    },
    {
      id: 5,
      name: "Mihir P.",
      rating: 5.0,
      vehicle: "Pulsar 150 · MH05 KL 7788",
      from: "Vihar Lake",
      to: "Ghatkopar Metro",
      time: "Today, 1:00 PM",
      seats: 2,
      distance: "35 min",
      price: 45,
      prepaid: true,
      avatarColor: "#10B981"
    },
    {
      id: 6,
      name: "Priya N.",
      rating: 4.9,
      vehicle: "Activa 6G · MH02 PQ 3344",
      from: "NMIMS Campus",
      to: "Vile Parle Station",
      time: "Today, 2:30 PM",
      seats: 1,
      distance: "50 min",
      price: 30,
      gender: "Ladies only",
      avatarColor: "#EC4899"
    }
  ];

  const setViewMode = (mode) => {
    setView(mode);
  };

  const toggleChip = (chip) => {
  };

  const openFilters = () => {
    setDrawerOpen(true);
  };

  const closeFilters = () => {
    setDrawerOpen(false);
  };

  const applyFilters = () => {
    setDrawerOpen(false);
  };

  const goToRide = (id) => {
    navigate(`/ride-details/${id}`);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F5] relative">
      {/* Top Nav */}
      <nav className="shrink-0 px-4 sm:px-5 h-14 flex items-center gap-3 bg-white/90 backdrop-filter backdrop-blur-md border-b border-black/7 z-20 relative">
        <button onClick={() => navigate('/student-home')} className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <h1 className="text-base font-bold text-[#111] flex-1">Find a Ride</h1>
        <div className="flex gap-1 bg-black/5 p-1 rounded-xl">
          <button
            className={`h-[34px] px-4 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all ${view === 'list' ? 'bg-black text-white' : 'bg-transparent text-black opacity-50'}`}
            onClick={() => setViewMode('list')}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
            List
          </button>
          <button
            className={`h-[34px] px-4 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all ${view === 'map' ? 'bg-black text-white' : 'bg-transparent text-black opacity-50'}`}
            onClick={() => setViewMode('map')}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
            </svg>
            Map
          </button>
        </div>
      </nav>

      {/* Search + Filters Bar */}
      <div className="shrink-0 bg-white border-b border-black/7 px-4 sm:px-5 pt-3 pb-3 z-10 relative">
        <div className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <input
              className="w-full h-10 border border-black/10 rounded-lg bg-white pl-10 pr-3 text-sm outline-none focus:border-[#F07B3A] focus:ring-2 focus:ring-[#F07B3A]/10"
              type="text"
              placeholder="From (e.g. IITB Gate 1)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="relative flex-1">
            <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <input
              className="w-full h-10 border border-black/10 rounded-lg bg-white pl-10 pr-3 text-sm outline-none focus:border-[#F07B3A] focus:ring-2 focus:ring-[#F07B3A]/10"
              type="text"
              placeholder="To (e.g. Andheri)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400" onClick={openFilters}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            Filters
          </button>
          <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400" onClick={() => toggleChip(this)}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            Any time
          </button>
          <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400" onClick={() => toggleChip(this)}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.66 7.36c.39.39.39 1.02 0 1.41l-2.36 2.36 1.19.89.55-.41c.34-.25.81-.25 1.15 0l.55.41 1.19-.89-2.36-2.36c-.39-.39-.39-1.02 0-1.41l2.36-2.36-1.19-.89-.55.41c-.34.25-.81.25-1.15 0l-.55-.41-1.19.89 2.36 2.36zM14 2l-.35 3h-1.3l-.35-3h-1.3l.35 3H9.7l-.35-3H8.05l.35 3H7v1.3h.7l-.24 2.16-.49-.33-.49.33.24-2.16H6v-1.3h1.3l-.35-3h1.3l.35 3h1.3l.35-3H14zM10 15h4v-2h-4v2zm8-6H6v2H4v6h2v-2h12v2h2v-6h-2z"/>
            </svg>
            Any price
          </button>
          <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400" onClick={() => toggleChip(this)}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.5 7c.28 0 .5.22.5.5V9h.75v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H5v-.5c0-.28.22-.5.5-.5zM18 9v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9h-1.5V8.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
            </svg>
            Any gender
          </button>
          <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400" onClick={() => toggleChip(this)}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            Shared/Private
          </button>
          <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400" onClick={() => toggleChip(this)}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            2 km radius
          </button>
        </div>

        <div className="flex items-center justify-between mt-2.5">
          <p className="text-xs text-black/40 font-medium">{rides.length} rides available</p>
          <button className="text-xs text-[#F07B3A] font-semibold hover:underline flex items-center gap-1" onClick={() => {}}>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            Clear filters
          </button>
        </div>
      </div>

      {/* List View */}
      {view === 'list' && (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 flex flex-col gap-3">
            {rides.map((ride, index) => (
              <div
                key={ride.id}
                className={`bg-white border border-black/7 rounded-2xl p-4 transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${ride.highlighted ? 'border-[#3DBDA8] shadow-md' : ''}`}
                onClick={() => goToRide(ride.id)}
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: ride.avatarColor }}>
                    {ride.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-sm text-black">{ride.name}</p>
                      <div className="flex items-center gap-0.5">
                        <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-xs text-black/55 font-semibold">{ride.rating}</span>
                      </div>
                      {ride.gender && <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">{ride.gender}</span>}
                      {ride.prepaid && <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-0.5 rounded-full">Prepaid</span>}
                    </div>
                    <p className="text-xs text-black/40 mt-0.5">{ride.vehicle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-base text-[#F07B3A]">₹{ride.price}</p>
                    <p className="text-xs text-black/35">per seat</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex flex-col items-center gap-0.5">
                    <svg className="w-4 h-4 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div className="w-0.5 h-6 bg-black/10 rounded"></div>
                    <svg className="w-4 h-4 text-[#F07B3A]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-semibold text-black">{ride.from}</p>
                    <p className="text-xs font-semibold text-black">{ride.to}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-black/45">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    {ride.time}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-black/45">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 18v3h16v-3H4zM4 5v3h16V5H4zm0 7v3h16v-3H4z"/>
                    </svg>
                    {ride.seats} seats left
                  </span>
                  <span className="flex items-center gap-1 text-[#3DBDA8] font-semibold">
                    <svg className="w-3 h-3 text-[#3DBDA8]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {ride.distance} away
                  </span>
                </div>
              </div>
            ))}
            <div className="h-4"></div>
          </div>
        </div>
      )}

      {/* Map View */}
      {view === 'map' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 m-3 rounded-2xl relative overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.8,19.0,73.0,19.3&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: '16px' }}
              title="Map View"
            ></iframe>
            {/* Mini card strip */}
            <div className="flex gap-3 overflow-x-auto px-3 pb-3 absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm">
              {rides.slice(0, 3).map((ride) => (
                <div key={ride.id} className="bg-white border border-black/7 rounded-2xl p-3 shrink-0 shadow-sm flex items-center gap-3 min-w-[200px]" onClick={() => goToRide(ride.id)}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: ride.avatarColor }}>
                    {ride.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-black">{ride.name}</p>
                    <p className="text-xs text-black/40 truncate">{ride.from} → {ride.to.split(' ')[0]}</p>
                  </div>
                  <p className="text-xs font-bold text-[#F07B3A] shrink-0">₹{ride.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter Drawer */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={closeFilters}></div>
          <div className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl px-5 pt-5 pb-8 z-[70] transition-transform duration-300 ${drawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-black">Filters</h3>
              <button onClick={closeFilters} className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-black">Price per seat</p>
                  <p className="text-sm font-bold text-[#F07B3A]">₹0 – ₹{priceRange}</p>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-black mb-2">Time window</p>
                <div className="flex gap-2 flex-wrap">
                  <button onClick={() => setSelectedTime('any')} className={`h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 ${selectedTime === 'any' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-gray-400'}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Any time
                  </button>
                  <button onClick={() => setSelectedTime('1hr')} className={`h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 ${selectedTime === '1hr' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-gray-400'}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Next 1 hr
                  </button>
                  <button onClick={() => setSelectedTime('3hrs')} className={`h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 ${selectedTime === '3hrs' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-gray-400'}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Next 3 hrs
                  </button>
                  <button onClick={() => setSelectedTime('today')} className={`h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 ${selectedTime === 'today' ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-gray-400'}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Today
                  </button>
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Tomorrow
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-black mb-2">Gender preference</p>
                <div className="flex gap-2 flex-wrap">
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 bg-black text-white border-black">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 7c.28 0 .5.22.5.5V9h.75v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H5v-.5c0-.28.22-.5.5-.5zM18 9v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9h-1.5V8.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
                    </svg>
                    Any
                  </button>
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 7c.28 0 .5.22.5.5V9h.75v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H5v-.5c0-.28.22-.5.5-.5zM18 9v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9h-1.5V8.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
                    </svg>
                    Ladies only
                  </button>
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 7c.28 0 .5.22.5.5V9h.75v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H5v-.5c0-.28.22-.5.5-.5zM18 9v7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9h-1.5V8.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
                    </svg>
                    Gents only
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-black mb-2">Ride type</p>
                <div className="flex gap-2">
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 bg-black text-white border-black">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                    Any
                  </button>
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                    Shared
                  </button>
                  <button className="h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 border-gray-300 bg-white text-black hover:border-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                    Private
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-black">Pickup radius</p>
                  <p className="text-sm font-bold text-[#F07B3A]">{radius} km</p>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            <button className="mt-5 w-full h-12 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E8662A] transition-colors" onClick={applyFilters}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Apply filters
            </button>
          </div>
        </>
      )}

      <BottomNav />
    </div>
  );
};

export default FindRide;
