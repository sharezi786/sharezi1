// PrivateRoute.jsx — dev mode: open for client demo, no auth check
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return <Outlet />;
}
