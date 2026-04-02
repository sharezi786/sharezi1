import React from 'react';
import { useLocation } from 'react-router-dom';

const BottomNavBar = () => {
  const location = useLocation();
  
  const getNavItems = () => [
    {
      href: '/student-home',
      icon: 'home',
      label: 'Home',
      isActive: location.pathname === '/student-home'
    },
    {
      href: '/find-ride',
      icon: 'directions_car',
      label: 'Rides',
      isActive: location.pathname === '/find-ride'
    },
    {
      href: '/find-food',
      icon: 'restaurant',
      label: 'Food',
      isActive: location.pathname === '/find-food'
    },
    {
      href: '/chat-box',
      icon: 'forum',
      label: 'Messages',
      isActive: location.pathname === '/chat-box'
    },
    {
      href: '/profile',
      icon: 'person',
      label: 'Profile',
      isActive: location.pathname === '/profile'
    }
  ];

  return (
    <nav className="bottom-nav shrink-0 flex z-20 relative">
      {getNavItems().map((item) => (
        <a 
          key={item.href}
          href={item.href} 
          className={`nav-item ${item.isActive ? 'active' : ''}`}
        >
          <span 
            className={item.isActive ? 'icon nav-icon' : 'icon-o nav-icon'} 
            style={{ 
              fontSize: '22px',
              ...(item.isActive && { color: '#F07B3A', opacity: 1 })
            }}
          >
            {item.icon}
          </span>
          <span className="nav-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNavBar;
