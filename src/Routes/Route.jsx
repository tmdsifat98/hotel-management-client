import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import SignUp from "../Pages/Authentication/SignUp";
import Login from "../Pages/Authentication/Login";
import RoomList from "../Pages/RoomList";
import RoomDetails from "../Pages/RoomDetails";
import Loader from "../Components/Loader";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings";
import RefundPolicy from "../Pages/RefundPolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndCondition from "../Pages/TermsAndCondition";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/all-rooms",
        Component: RoomList,
      },
      {
        path: "/room/:id",
        Component: RoomDetails,
        loader: ({ params }) =>
          fetch(`https://assignment-11-server-beige-seven.vercel.app/room/${params.id}`),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      { path: "/refundPolicy", Component: RefundPolicy },
      { path: "/privacyPolicy", Component: PrivacyPolicy },
      { path: "/termsAndCondition", Component: TermsAndCondition },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signUp",
        Component: SignUp,
      },
      { path: "/auth/login", Component: Login },
    ],
  },
  { path: "*", Component: ErrorPage },
]);

export default router;
