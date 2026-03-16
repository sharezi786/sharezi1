import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OfferRide = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState(1);
  const [price, setPrice] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGender, setSelectedGender] = useState("any");
  const [inAppPaymentOnly, setInAppPaymentOnly] = useState(true);

  // ─── Constants ──────────────────────────────────────────────────────────────

  const GENDER_OPTIONS = [
    { key: "any", label: "Any" },
    { key: "ladies", label: "Ladies only" },
    { key: "gents", label: "Gents only" },
  ];

  // ─── OptionChip Component ────────────────────────────────────────────────────

  const OptionChip = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`h-8 px-3 rounded-full lbl_text font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2
        ${active ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-300 hover:border-gray-400"}`}
    >
      {label}
    </button>
  );

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const loadDraft = () => {
    setFrom("Mumbai Central");
    setTo("Pune Station");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ from, to, date, time, seats, price, vehicle, description, selectedGender, inAppPaymentOnly });
    // Navigate back or to success page
    navigate("/student-home");
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F5] font-sans text-gray-400">
      {/* Top Nav */}
      <nav className="shrink-0 px-4 sm:px-5 h-14 flex items-center gap-3 bg-white/90 backdrop-blur-md border-b border-black/7 z-20 relative">
        <button
          onClick={() => navigate("/student-home")}
          className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors shrink-0"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <h1 className="text-base font-bold text-[#111] flex-1">Offer a Ride</h1>
        <button onClick={loadDraft} className="lbl_text text-[#F07B3A] font-bold hover:underline flex items-center gap-1">
          <span className="material-symbols-rounded" style={{ fontSize: '15px' }}>draft</span>
          Load draft
        </button>
      </nav>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4">
        <div className="max-w-xl mx-auto px-4 py-5 pb-10 flex flex-col gap-4">
          <form onSubmit={handleSubmit}>
            {/* Route Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Route</h3>
              <div className="grid grid-cols-1 gap-4">
                {/* From */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">From</label>
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="e.g. IITB Gate 1"
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent text-black lbl_text"
                    required
                  />
                </div>
                <div className="flex justify-center -my-1 relative z-10">
                  <button onClick={swapLocations} className="w-8 h-8 rounded-xl bg-[#F7F7F5] border border-black/8 flex items-center justify-center hover:bg-[#EAF9F7] transition-colors">
                    <span className="material-symbols-rounded" style={{ fontSize: '18px' }}>swap_vert</span>
                  </button>
                </div>
                {/* To */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">To</label>
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="e.g. Andheri Station"
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent text-black lbl_text"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Date & Time Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Date & Time</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent text-black"
                    required
                  />
                </div>
                {/* Time */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent text-black"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Seats & Price Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Seats & Price</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Seats */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Available Seats</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setSeats(Math.max(1, seats - 1))}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
                    >
                      <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>remove</span>
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="6"
                      value={seats}
                      onChange={(e) => setSeats(Number(e.target.value))}
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-12 pl-12 pr-12 text-center rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent"
                      style={{ MozAppearance: 'textfield' }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setSeats(Math.min(6, seats + 1))}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
                    >
                      <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>add</span>
                    </button>
                  </div>
                </div>
                {/* Price */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Price per Seat (₹)</label>
                  <div className="relative">
                    <div className="absolute left-3 top-0 bottom-0 flex items-center text-gray-500">
                      <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>currency_rupee</span>
                    </div>
                    <input
                      type="number"
                      min="0"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="e.g. 50"
                      className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-[#EAF9F7] rounded-xl p-3 flex items-center gap-2">
                <span className="material-symbols-rounded" style={{ fontSize: '18px', color: '#3DBDA8' }}>savings</span>
                <p className="lbl_text text-[#111]/55">You could earn <span className="font-bold text-[#2A9E8C]">₹{seats * (Number(price) || 0)}</span> if all seats are taken</p>
              </div>
            </div>

            {/* Details Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Details</h3>
              <div className="space-y-4">
                {/* Vehicle */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Vehicle Details</label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="e.g. Honda Activa · MH02 AZ 1234"
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent text-black"
                    required
                  />
                </div>

                {/* Preferences */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="lbl_text font-semibold text-gray-400 mb-4 uppercase">Preferences</p>
                  <div className="space-y-4">
                    {/* Gender */}
                    <div>
                      <p className="lbl_text font-semibold text-gray-400 mb-2">Gender preference</p>
                      <div className="flex gap-2 flex-wrap">
                        {GENDER_OPTIONS.map((o) => (
                          <OptionChip key={o.key} label={o.label} active={selectedGender === o.key}
                            onClick={() => setSelectedGender(o.key)} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-black">In-app payment only</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={inAppPaymentOnly} onChange={(e) => setInAppPaymentOnly(e.target.checked)} />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3DBDA8]"></div>
                    </label>
                  </div>
                  <p className="lbl_text text-gray-500 mt-2">Riders must pay through Sharezi wallet — no cash</p>
                </div>

                {/* Description */}
                <div className="border-t border-gray-200 pt-2">
                  <label className="block lbl_text font-semibold text-gray-400 mb-2">Notes <span className="opacity-50">(Optional)</span></label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. I'll be at the gate in a red jacket. No smoking please."
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl lbl_text border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07B3A] focus:border-transparent resize-none text-black"
                  ></textarea>
                  <p className="text-[11px] text-[#111]/30 mt-1 text-right">{description.length}/200</p>

                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E8662A] transition-colors"
                  style={{ marginTop: '3px', marginBottom: '3px' }}
                >
                  <span className="material-symbols-rounded">send</span>
                  Publish Ride
                </button>
                <button
                  type="button"
                  className="w-full h-12 rounded-xl bg-white text-gray-400 font-bold text-sm border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  onClick={() => console.log("Saved as draft")}
                  style={{ marginTop: '3px', marginBottom: '3px' }}
                >
                  <span className="material-symbols-rounded">save</span>
                  Save as Draft
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferRide;
