import React from "react";
import { Outlet } from "react-router";
import AuthContext from "../Providers/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <nav className="sticky md:pt-2 top-0 z-50 w-full">
        <Navbar />
      </nav>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
