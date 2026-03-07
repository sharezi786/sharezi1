const StatsRow = () => {
  const stats = [
    { id: 1, value: "3", label: "Active rides nearby", color: "#3DBDA8" },
    { id: 2, value: "₹340", label: "Saved this month", color: "#F07B3A" },
    { id: 3, value: "5", label: "Food orders open", color: "#8B5CF6" },
  ];

  return (
    <div className="flex gap-3 mb-6 u2">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-pill">
          <p className="font-black text-xl" style={{color: stat.color, fontFamily:'Syne'}}>{stat.value}</p>
          <p className="text-[#111]/40 text-[11px] mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
