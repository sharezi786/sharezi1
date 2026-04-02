import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// Optimized SafetyItem component for better maintainability
const SafetyItem = ({ icon, color, bgColor, title, description }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: bgColor }}>
      <span className="icon" style={{ fontSize: '16px', color }}>{icon}</span>
    </div>
    <div>
      <p className="text-xs font-semibold text-[#111]">{title}</p>
      <p className="text-[10px] text-[#111]/40">{description}</p>
    </div>
  </div>
);

// Optimized PriceRow component for reusable price display
const PriceRow = ({ label, amount, color = '#111', isPromo = false }) => (
  <div className="flex items-center justify-between py-2.5 text-sm">
    <span className="text-[#111]/55">{label}</span>
    <span className={`font-semibold ${isPromo ? 'text-teal' : 'text-[#111]'}`}>
      {isPromo ? `-${amount}.00` : `$${amount}.00`}
    </span>
  </div>
);

// Optimized WalletSection component for payment method
const WalletSection = ({ balance, onChange }) => (
  <div className="mt-3 flex items-center gap-2 bg-[#F7F7F5] rounded-xl p-3">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 7h7v2H5V7zm0 4h7v2H5v-2zm0 4h7V2H5v-2z"/>
    </svg>
    <div className="flex-1">
      <p className="text-xs font-semibold text-[#111]">Sharezi Wallet</p>
      <p className="text-xs text-[#111]/40">Balance: ${balance}</p>
    </div>
    <button 
      className="text-xs text-orange font-semibold hover:underline" 
      onClick={onChange}
    >
      Change
    </button>
  </div>
);

const RideDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [message, setMessage] = useState('');

  // Mock ride data
  const ride = {
    id: 1,
    name: "Riya Sharma",
    rating: 4.8,
    vehicle: "Honda Activa 6G · MH02 AZ 1234 · White",
    from: "Downtown Station",
    to: "North Campus Gate",
    time: "Today at 10:30 AM",
    distance: "5.4 mi",
    duration: "~22 min",
    seats: 2,
    price: 40,
    platformFee: 2,
    promo: 10,
    total: 32,
    gender: "Ladies only",
    prepaid: true,
    avatarColor: "#3DBDA8",
    verified: true,
    bio: "B.Tech 3rd Year · IITB",
    rides: 124,
    walletBalance: 240
  };

  const openConfirm = () => setShowConfirm(true);
  const closeConfirm = () => setShowConfirm(false);

  const confirmBooking = () => {
    setConfirming(true);
    setTimeout(() => {
      navigate('/student-home');
    }, 1500);
  };

  const openMessage = () => setShowMessage(true);
  const closeMessage = () => setShowMessage(false);

  const shareRide = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F5] relative font-sans">
      {/* Top Nav */}
      <nav className="shrink-0 px-4 h-14 flex items-center gap-3 bg-white/90 backdrop-filter backdrop-blur-md border-b border-black/7 z-20 relative">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors shrink-0"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <h1 className="text-base font-bold text-[#111] flex-1">Ride Details</h1>
        <button
          onClick={shareRide}
          className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
        >
          <span className="icon">share</span>
        </button>
      </nav>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {/* Map Route */}
          <div className="map-area rounded-2xl h-48 relative overflow-hidden bg-[#E8F0F8]">
            {/* Grid */}
            <svg
              width="100%"
              height="100%"
              className="absolute inset-0 opacity-20"
            >
              <defs>
                <pattern
                  id="grid"
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 28 0 L 0 0 0 28"
                    fill="none"
                    stroke="rgba(61,189,168,.5)"
                    strokeWidth=".5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Route SVG */}
            <svg
              className="absolute inset-0"
              width="100%"
              height="100%"
              viewBox="0 0 500 180"
              preserveAspectRatio="none"
            >
              <path
                d="M 60 150 C 120 130 160 100 220 80 C 280 60 340 50 440 40"
                fill="none"
                stroke="#F07B3A"
                strokeWidth="3"
                strokeDasharray="8,5"
                strokeLinecap="round"
                opacity=".8"
              />
              {/* Start dot */}
              <circle cx="60" cy="150" r="7" fill="#3DBDA8" />
              <circle cx="60" cy="150" r="12" fill="#3DBDA8" opacity=".2" />
              {/* End dot */}
              <circle cx="440" cy="40" r="7" fill="#F07B3A" />
              <circle cx="440" cy="40" r="12" fill="#F07B3A" opacity=".2" />
              {/* Driver dot */}
              <circle cx="200" cy="88" r="8" fill="#111" />
              <circle cx="200" cy="88" r="14" fill="#111" opacity=".15" />
            </svg>
            {/* Labels */}
            <div className="absolute bottom-4 left-5 bg-white/90 backdrop-blur rounded-xl px-2.5 py-1 text-xs font-semibold text-[#3DBDA8] shadow-sm">
              INorth Campus Gate
            </div>
            <div className="absolute top-4 right-5 bg-white/90 backdrop-blur rounded-xl px-2.5 py-1 text-xs font-semibold text-[#F07B3A] shadow-sm">
              Downtown Station
            </div>
            <div className="absolute bottom-4 right-5 bg-black/70 backdrop-blur rounded-xl px-2.5 py-1 text-xs font-semibold text-white flex items-center gap-1">
              <span
                className="icon"
                style={{ fontSize: "12px", color: "#3DBDA8" }}
              >
                timer
              </span>{" "}
              ~22 min
            </div>
          </div>

          {/* Driver Profile */}
          <div className="bg-white border border-black/7 rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#3DBDA8] flex items-center justify-center text-white text-xl font-bold">
                  {ride.name[0]}
                </div>
                {ride.verified && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#EAF9F7] border-2 border-white flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <p className="font-bold text-base text-[#111]">{ride.name}</p>
                  <span className="bg-[#EAF9F7] text-[#2A9E8C] text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <svg
                      className="w-2.5 h-2.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="text-xs text-[#111]/40 mb-1.5">{ride.bio}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-sm font-bold text-[#111]">
                      {ride.rating}
                    </span>
                    <span className="text-sm text-[#111]/35">
                      ({ride.rides} rides)
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={openMessage}
                className="bg-[#3DBDA8] text-white text-xs font-semibold h-8 rounded-lg flex items-center gap-1 px-3 shrink-0 hover:bg-[#2AA898]"
              >
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm0 3h7c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z" />
                </svg>
                Message
              </button>
            </div>

            <div className="border-t border-black/7 my-4"></div>

            {/* Vehicle info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                <span className="icon">pedal_bike</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111]">
                  {ride.vehicle.split(" · ")[0]}
                </p>
                <p className="text-xs text-[#111]/40">
                  {ride.vehicle.split(" · ").slice(1).join(" · ")}
                </p>
              </div>
              <div className="ml-auto flex gap-1.5">
                <span className="bg-[#F3EFFE] text-[#7C3AED] text-xs font-bold px-2 py-1 rounded-full">
                  {ride.gender}
                </span>
                <span className="bg-[#EAF9F7] text-[#2A9E8C] text-xs font-bold px-2 py-1 rounded-full">
                  Prepaid
                </span>
              </div>
            </div>
          </div>

          {/* Route Info */}
          <div className="bg-white border border-black/7 rounded-2xl p-4">
            <p className="text-xs font-bold text-[#111]/35 uppercase tracking-widest mb-3">
              Route
            </p>
            <div className="flex gap-3">
              <div className="flex flex-col items-center pt-1">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="w-0.5 flex-1 bg-black/10 my-1 rounded"></div>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
              </div>
              <div className="flex flex-col justify-between flex-1 min-h-[56px]">
                <div>
                  <p className="text-sm font-semibold text-[#111]">
                    {ride.from}
                  </p>
                  <p className="text-xs text-[#111]/40">Pickup · {ride.time}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111]">{ride.to}</p>
                  <p className="text-xs text-[#111]/40">Drop-off · ~10:52 AM</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-[#111]/35">Distance</p>
                <p className="text-sm font-bold text-[#111]">{ride.distance}</p>
                <p className="text-xs text-[#111]/35 mt-1">Duration</p>
                <p className="text-sm font-bold text-[#111]">{ride.duration}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-[#111]/50 bg-black/5 px-3 py-1.5 rounded-full font-medium">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                {ride.seats} seats available
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#111]/50 bg-black/5 px-3 py-1.5 rounded-full font-medium">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                4 min away
              </span>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-white border border-black/7 rounded-2xl p-4">
            <p className="text-xs font-bold text-[#111]/35 uppercase tracking-widest mb-2">
              Price Breakdown
            </p>
            <PriceRow label="Ride fare (1 seat)" amount={ride.price} />
            <PriceRow label="Platform fee" amount={ride.platformFee} />
            <PriceRow
              label="Promo (CAMPUS3)"
              amount={ride.promo}
              isPromo={true}
            />
            <div className="flex items-center justify-between py-2.5 text-sm border-t-2 border-black/10 pt-3 mt-1">
              <span className="font-bold text-[#111]">Total payable</span>
              <span
                style={{ fontFamily: "Syne" }}
                className="text-lg font-black text-orange"
              >
                ${ride.total}.00
              </span>
            </div>
            <WalletSection
              balance={ride.walletBalance}
              onChange={() => console.log("Change wallet")}
            />
          </div>

          {/* Safety Info */}
          <div className="bg-white border border-black/7 rounded-2xl p-4">
            <p className="text-xs font-bold text-[#111]/35 uppercase tracking-widest mb-3">
              Safety
            </p>
            <div className="flex flex-col gap-2.5">
              <SafetyItem
                icon="verified_user"
                color="#3DBDA8"
                bgColor="#EAF9F7"
                title="ID Verified Driver"
                description="Student ID + licence confirmed"
              />
              <SafetyItem
                icon="my_location"
                color="#3DBDA8"
                bgColor="#EAF9F7"
                title="Live ride tracking"
                description="Share your trip with a trusted contact"
              />
              <SafetyItem
                icon="sos"
                color="#EF4444"
                bgColor="#FEF2F2"
                title="SOS button"
                description="Available during your ride"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="shrink-0 px-4 py-3 bg-white/97 backdrop-blur border-t border-black/8 z-20 relative">
        <div className="max-w-xl mx-auto flex gap-3">
          <button
            onClick={openMessage}
            className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-black/10 flex items-center justify-center"
          >
            <span className="icon">chat</span>
          </button>
          <button
            onClick={openConfirm}
            className="flex-1 bg-[#F07B3A] text-white font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(240,123,58,.28)] hover:shadow-[0_8px_24px_rgba(240,123,58,.38)] hover:-translate-y-0.5 transition-all"
          >
            <span className="icon">event_note</span>
            Request Seat — ₹{ride.total}
          </button>
          <button
            onClick={shareRide}
            className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-black/10 flex items-center justify-center"
          >
            <span className="icon">share</span>
          </button>
        </div>
      </div>

      <>
        {/* Confirm Modal */}
        {showConfirm && (
          <div className="fixed inset-0 z-60 flex items-end justify-center">
            <div
              className="absolute inset-0 bg-black/45"
              onClick={closeConfirm}
            ></div>
            <div className="relative z-1 bg-white border-t-4 border-t-white rounded-t-3xl p-4 w-full max-w-[540px]">
              <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
              <h3 className="text-lg text-[#111] mb-1">Confirm your seat</h3>
              <p className="text-sm text-[#111]/45 mb-5">
                Review your booking details before confirming.
              </p>

              <div className="bg-[#F7F7F5] rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white font-bold shrink-0">
                    {ride.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111]">{ride.name}</p>
                    <p className="text-xs text-[#111]/40">
                      {ride.vehicle.split(" · ")[0]} ·{" "}
                      {ride.vehicle.split(" · ")[1]}
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <span
                      style={{ fontFamily: "Syne" }}
                      className="text-lg font-black text-[#F07B3A]"
                    >
                      ₹{ride.total}
                    </span>
                    <p className="text-[10px] text-[#111]/35">total</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#111]/50">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {ride.from}
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  {ride.to}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-5 bg-[#EAF9F7] rounded-xl p-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 7h7v2H5V7zm0 4h7v2H5v-2zm0 4h7v2H5v-2z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#111]">
                    Pay from Wallet
                  </p>
                  <p className="text-xs text-[#111]/40">
                    ₹{ride.walletBalance} → ₹{ride.walletBalance - ride.total}{" "}
                    after booking
                  </p>
                </div>
                <span className="ml-auto text-xs font-bold text-[#3DBDA8]">
                  ₹{ride.total}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={closeConfirm}
                  className="flex-1 bg-white text-[#111] font-semibold text-sm h-12 rounded-xl border border-black/12 flex items-center justify-center hover:border-black/22 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  disabled={confirming}
                  className="flex-1 bg-[#F07B3A] text-white font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(240,123,58,.28)] hover:shadow-[0_8px_24px_rgba(240,123,58,.38)] hover:-translate-y-0.5 transition-all disabled:opacity-50"
                >
                  {confirming ? (
                    <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
              <p className="text-center text-[10px] text-[#111]/30 mt-3">
                Payment is processed in-app only. No cash.
              </p>
            </div>
          </div>
        )}

        {/* Message Drawer */}
        {showMessage && (
          <div className="fixed inset-0 z-60 flex items-end justify-center">
            <div
              className="absolute inset-0 bg-black/45"
              onClick={closeMessage}
            ></div>
            <div className="relative z-1 bg-white border-t-4 border-t-white rounded-t-3xl p-4 w-full max-w-[540px]">
              <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-4"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white font-bold">
                  {ride.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111]">{ride.name}</p>
                  <p className="text-xs text-[#111]/40">
                    Usually replies in minutes
                  </p>
                </div>
                <button
                  onClick={closeMessage}
                  className="ml-auto w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center"
                >
                  <span className="icon">close</span>
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto mb-3 pb-1 scrollbar-hide">
                <button
                  onClick={() => setMessage("Are you still on time?")}
                  className="text-xs bg-[#F7F7F5] border border-black/8 rounded-full px-3 py-1.5 whitespace-nowrap font-medium hover:bg-[#EAF9F7] transition-colors"
                >
                  Are you still on time?
                </button>
                <button
                  onClick={() => setMessage("I'm at the pickup point")}
                  className="text-xs bg-[#F7F7F5] border border-black/8 rounded-full px-3 py-1.5 whitespace-nowrap font-medium hover:bg-[#EAF9F7] transition-colors"
                >
                  I'm at the pickup point
                </button>
                <button
                  onClick={() => setMessage("Can you wait 2 min?")}
                  className="text-xs bg-[#F7F7F5] border border-black/8 rounded-full px-3 py-1.5 whitespace-nowrap font-medium hover:bg-[#EAF9F7] transition-colors"
                >
                  Can you wait 2 min?
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 h-11 border border-black/1 rounded-xl bg-[#F7F7F5] px-3 text-sm outline-none"
                />
                <button className="w-11 h-11 rounded-xl bg-[#3DBDA8] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Share Toast */}
        {showToast && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1 shadow-lg z-70">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Link copied to clipboard!
          </div>
        )}
      </>
    </div>
  );
};

export default RideDetails;
