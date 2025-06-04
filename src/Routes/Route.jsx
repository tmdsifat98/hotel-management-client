import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import SignUp from "../Pages/Authentication/SignUp";
import Login from "../Pages/Authentication/Login";
import RoomList from "../Pages/RoomList";

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
