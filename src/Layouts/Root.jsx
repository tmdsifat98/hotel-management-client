import React from "react";
import { Outlet } from "react-router";
import AuthContext from "../Providers/AuthContext";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <nav className="sticky pt-2 top-0 z-50 w-full">
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
