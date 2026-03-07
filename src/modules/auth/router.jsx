import LoginPage from './view/pages/LoginPage';
import SignupPage from './view/pages/SignupPage';

const authRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
];

export default authRoutes;
