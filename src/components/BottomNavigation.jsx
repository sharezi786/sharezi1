import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: 'home',
      path: '/student-home',
      isActive: location.pathname === '/student-home'
    },
    {
      id: 'rides',
      label: 'Rides',
      icon: 'directions_car',
      path: '/find-ride',
      isActive: location.pathname === '/find-ride'
    },
    {
      id: 'food',
      label: 'Food',
      icon: 'restaurant',
      path: '/find-food',
      isActive: location.pathname === '/find-food'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: 'forum',
      path: '/chat-box',
      isActive: location.pathname === '/chat-box'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: 'person',
      path: '/profile',
      isActive: location.pathname === '/profile'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex z-20 bg-white/96 backdrop-blur-md border-t border-black/7">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(item.path)}
          className={`nav-item flex-1 flex flex-col items-center justify-center gap-1 p-2 cursor-pointer transition-all duration-200 ${
            item.isActive ? 'text-orange' : 'text-gray-400'
          }`}
        >
          <span 
            className={`nav-icon ${item.isActive ? 'icon' : 'icon-o'}`} 
            style={{ 
              fontSize: '22px', 
              opacity: item.isActive ? 1 : 0.3,
              color: item.isActive ? '#F07B3A' : 'inherit'
            }}
          >
            {item.icon}
          </span>
          <span 
            className="nav-label text-[10px] font-semibold" 
            style={{ 
              opacity: item.isActive ? 1 : 0.3,
              color: item.isActive ? '#F07B3A' : 'inherit'
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
