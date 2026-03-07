const ActivityCard = ({ title, subtitle, amount, icon, status }) => {
  const renderIcon = () => {
    switch (icon) {
      case "directions_car":
        return (
          <svg className="w-5 h-5" style={{color:'#3DBDA8'}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        );
      case "lunch_dining":
        return (
          <svg className="w-5 h-5" style={{color:'#F07B3A'}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 10c.32-3.28-4.28-5.54-4.28-5.54L15.72 2c-.78 0-1.42.64-1.42 1.42V6.5H9.9c-.98 0-1.79.81-1.79 1.79v1.5h-.01c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-.01v-1.5c0-.98.81-1.79 1.79-1.79H19V3.42c0-.78.64-1.42 1.42-1.42L22 2.58c0 .78.64 1.42 1.42 1.42V10z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    if (status === "Completed") return "#3DBDA8";
    if (status === "Delivered") return "#F07B3A";
    return "#3DBDA8";
  };

  const getStatusBg = () => {
    if (status === "Completed") return "#EAF9F7";
    if (status === "Delivered") return "#FFF3EC";
    return "#EAF9F7";
  };

  return (
    <div className="activity-card">
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{backgroundColor: getStatusBg()}}>
        {renderIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#111]">{title}</p>
        <p className="text-xs text-[#111]/40 truncate">{subtitle}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-bold text-[#111]">{amount}</p>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{color: getStatusColor(), backgroundColor: getStatusBg()}}>
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>{status}
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;
