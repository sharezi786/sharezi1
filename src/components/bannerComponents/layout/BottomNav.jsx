import { NavLink } from "react-router-dom";
import { memo } from "react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    ),
  },
  {
    name: "Rides",
    path: "/find-ride",
    icon: (
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
    ),
  },
  {
    name: "Food",
    path: "/food",
    icon: (
      <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7z" />
    ),
  },
  {
    name: "Messages",
    path: "/messages",
    icon: (
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    ),
  },
  {
    name: "Profile",
    path: "/profile",
    icon: (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    ),
  },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white z-50">
      <div className="max-w-2xl mx-auto flex justify-between px-2 py-2">

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 flex-1 text-xs font-medium transition-colors ${
                isActive
                  ? "text-[#3DBDA8]"
                  : "text-gray-400 hover:text-gray-600"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {item.icon}
            </svg>
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>
    </nav>
  );
};

export default memo(BottomNav);