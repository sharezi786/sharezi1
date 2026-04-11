import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginPage from "../modules/auth/view/pages/LoginPage";
import SignupPage from "../modules/auth/view/pages/SignupPage";
import Landing from '../pages/Landing/Landing';
import VerificationForm from "../modules/auth/view/components/VerificationForm";
import Home from '../bannerPage/Home';
import FindRide from '../pages/findRide/findRide';
import RideDetails from '../pages/rideDetails/rideDetails';
import OfferRide from '../pages/offerRide/offerRide';
import MyOffer from '../pages/myofferComponents/MyOffer';
import ChatBox from '../components/chatBox/chatBox';
import PostFood from '../pages/postFood/postFood';
import Wallet from "../pages/wallet/wallet";
import FindFood from '../pages/findFood/FindFood';
import FoodDetails from '../pages/foodDetail/FoodDetails';

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div>
        <Outlet /></div>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "verify",
        element: <VerificationForm />,
      },
      {
        path: "student-home",
        element: <Home />,
      },
      {
        path: "find-ride",
        element: <FindRide />,
      },
      {
        path: "ride-details/:id",
        element: <RideDetails />,
      },
      {
        path: "offer-ride",
        element: <OfferRide />,
      },
      {
        path: "my-offers",
        element: <MyOffer />,
      },
      {
        path: "chat-box",
        element: <ChatBox />,
      },
      {
        path: "post-food",
        element: <PostFood />,
      },
      {
        path: "find-food",
        element: <FindFood />,
      },
      {
        path: "food-details/:foodId",
        element: <FoodDetails />,
      },
      {
        path: "wallet",
        element: <Wallet />,
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