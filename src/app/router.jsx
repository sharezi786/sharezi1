import { createBrowserRouter, Outlet } from "react-router-dom";

// Guards
import PublicRoute  from "../common/guards/PublicRoute";
import PrivateRoute from "../common/guards/PrivateRoute";

// Layouts
import AuthLayout from "../common/components/layout/AuthLayout";
import AppLayout  from "../common/components/layout/AppLayout";

// Module routes
import { authRoutes }      from "../modules/auth/routes";
import { dashboardRoutes } from "../modules/dashboard/routes";
import { rideRoutes }      from "../modules/ride/routes";
import { foodRoutes }      from "../modules/food/routes";

const router = createBrowserRouter([
  {
    element: <PublicRoute/>,
     children: [
      {
        element: <AuthLayout><Outlet /></AuthLayout>,
        children: authRoutes.filter(r =>
          ["/", "/login", "/signup/:role", "/verify", "/verify-status"].includes(r.path)
        ),
      },
    ],
  },
  {

    element: <PrivateRoute role="student" />,
    children: [
      {
        element: <AppLayout />,
        children: [
          ...dashboardRoutes.filter(r => r.path === "/student-home"),
          ...rideRoutes.filter(r => !["/offer-ride", "/my-offers"].includes(r.path)),
          ...foodRoutes,
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F6F8]">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl text-[#2D3748] mb-2">404</h1>
          <p className="text-[#8A95A3]">Page not found</p>
        </div>
      </div>
    ),
  },
]);

export default router;
