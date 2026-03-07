const QuickTile = ({ title, desc, icon, bg, color, href }) => {
  const renderIcon = () => {
    switch (icon) {
      case "directions_car":
        return (
          <svg className="w-6.5 h-6.5" style={{color}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        );
      case "hail":
        return (
          <svg className="w-6.5 h-6.5" style={{color}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 2c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V6h1.79c.45 0 .67-.54.35-.85l-2.79-2.8c-.2-.19-.51-.19-.71 0l-2.79 2.8c-.31.31-.09.85.36.85H16V3c0-.55-.45-1-1-1zM9 8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM7.5 12c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM11 9.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM9 15.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM12 13.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM16.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"/>
          </svg>
        );
      case "restaurant":
        return (
          <svg className="w-6.5 h-6.5" style={{color}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          </svg>
        );
      case "lunch_dining":
        return (
          <svg className="w-6.5 h-6.5" style={{color}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 10c.32-3.28-4.28-5.54-4.28-5.54L15.72 2c-.78 0-1.42.64-1.42 1.42V6.5H9.9c-.98 0-1.79.81-1.79 1.79v1.5h-.01c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-.01v-1.5c0-.98.81-1.79 1.79-1.79H19V3.42c0-.78.64-1.42 1.42-1.42L22 2.58c0 .78.64 1.42 1.42 1.42V10z"/>
          </svg>
        );
      case "account_balance_wallet":
        return (
          <svg className="w-6.5 h-6.5" style={{color}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zM12 16h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        );
      case "forum":
        return (
          <svg className="w-6.5 h-6.5" style={{color}} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a href={href} className="tile">
      <div className="tile-icon" style={{backgroundColor: bg}}>
        {renderIcon()}
      </div>
      <p className="font-bold text-sm text-[#111] mb-0.5">{title}</p>
      <p className="text-[#111]/40 text-xs">{desc}</p>
    </a>
  );
};

export default QuickTile;
