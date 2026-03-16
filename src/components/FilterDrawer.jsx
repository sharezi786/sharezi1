import { memo } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

export const TIME_OPTIONS = [
  { key: "any", label: "Any time" },
  { key: "1hr",  label: "Next 1 hr" },
  { key: "3hrs", label: "Next 3 hrs" },
  { key: "today", label: "Today" },
  { key: "tomorrow", label: "Tomorrow" },
];

export const GENDER_OPTIONS = [
  { key: "any",    label: "Any" },
  { key: "ladies", label: "Ladies only" },
  { key: "gents",  label: "Gents only" },
];

export const RIDE_TYPE_OPTIONS = [
  { key: "any",     label: "Any" },
  { key: "shared",  label: "Shared" },
  { key: "private", label: "Private" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const OptionChip = memo(({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2
      ${active ? "bg-black text-white border-black" : "bg-white text-black border-gray-300 hover:border-gray-400"}`}
  >
    {label}
  </button>
));

// ─── FilterDrawer Component ───────────────────────────────────────────────────

const FilterDrawer = memo(({ open, onClose, filters, onChange, onApply }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-[60]" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl px-5 pt-5 pb-8 z-[70]">
        <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5" />
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-black">Filters</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
          {/* Price slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-black">Price per seat</p>
              <p className="text-sm font-bold text-[#F07B3A]">₹0 – ₹{filters.price}</p>
            </div>
            <input type="range" min="0" max="500" value={filters.price}
              onChange={(e) => onChange("price", Number(e.target.value))}
              className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer" />
          </div>

          {/* Time */}
          <div>
            <p className="text-sm font-semibold text-black mb-2">Time window</p>
            <div className="flex gap-2 flex-wrap">
              {TIME_OPTIONS.map((o) => (
                <OptionChip key={o.key} label={o.label} active={filters.time === o.key}
                  onClick={() => onChange("time", o.key)} />
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <p className="text-sm font-semibold text-black mb-2">Gender preference</p>
            <div className="flex gap-2 flex-wrap">
              {GENDER_OPTIONS.map((o) => (
                <OptionChip key={o.key} label={o.label} active={filters.gender === o.key}
                  onClick={() => onChange("gender", o.key)} />
              ))}
            </div>
          </div>

          {/* Ride type */}
          <div>
            <p className="text-sm font-semibold text-black mb-2">Ride type</p>
            <div className="flex gap-2 flex-wrap">
              {RIDE_TYPE_OPTIONS.map((o) => (
                <OptionChip key={o.key} label={o.label} active={filters.rideType === o.key}
                  onClick={() => onChange("rideType", o.key)} />
              ))}
            </div>
          </div>

          {/* Radius slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-black">Pickup radius</p>
              <p className="text-sm font-bold text-[#F07B3A]">{filters.radius} km</p>
            </div>
            <input type="range" min="1" max="10" value={filters.radius}
              onChange={(e) => onChange("radius", Number(e.target.value))}
              className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer" />
          </div>
        </div>

        <button
          className="mt-5 w-full h-12 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E8662A] transition-colors"
          onClick={onApply}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          Apply filters
        </button>
      </div>
    </>
  );
});

export default FilterDrawer;
