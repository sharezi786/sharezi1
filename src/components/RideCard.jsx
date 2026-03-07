import React from "react";

const RideCard = React.memo(({ ride }) => {
  return (
    <div className="bg-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
        style={{ backgroundColor: ride.color }}
      >
        {ride.initial}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-white/90 text-[11px] font-semibold">
          {ride.name}
        </p>
        <p className="text-white/40 text-[9px] truncate">
          {ride.route}
        </p>
      </div>

      <span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded-full">
        {ride.price}
      </span>
    </div>
  );
});

export default RideCard;