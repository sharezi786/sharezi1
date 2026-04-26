import { NavLink } from "react-router-dom";
import { memo } from "react";
import Icons from "../../Icons";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Icons.Home,
  },
  {
    name: "Rides",
    path: "/find-ride",
    icon: Icons.DirectionsCarNav,
  },
  {
    name: "Food",
    path: "/find-food",
    icon: Icons.Restaurant,
  },
  {
    name: "Messages",
    path: "/chat-box",
    icon: Icons.Forum,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: Icons.PersonNav,
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
              `bnav-item flex flex-col items-center justify-center gap-1 flex-1 p-2 cursor-pointer  ${
                isActive
                  ? "active"
                  : ""
              }`
            }
          >
            {item.icon()}
            <span className="label">{item.name}</span>
          </NavLink>
        ))}

      </div>
    </nav>
  );
};

export default memo(BottomNav);