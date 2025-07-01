import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <nav className="sticky top-0 z-[1111] w-full bg-black/20">
        <Navbar />
      </nav>
      <div className="z-0">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
