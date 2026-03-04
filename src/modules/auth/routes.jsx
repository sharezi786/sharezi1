import VerificationForm from "./view/components/VerificationForm";
import LoginPage from "./view/pages/LoginPage";
import SignupPage from "./view/pages/SignupPage";
import VerificationStatusPage from "./view/pages/VerificationStatusPage";

export const authRoutes = [
  {
    path: "/",
    element: <div>Welcome to ShareZI</div>,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup/student",
    element: <SignupPage/>,
  },
  {
    path: "/verify",
    element: <VerificationForm/>,
  },
  {
    path: "/verify-status",
    element: <VerificationStatusPage/>,
  },
];
