import React from "react";
import { Outlet } from "react-router";
import AuthContext from "../Providers/AuthContext";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Outlet />
    </div>
  );
};

export default Root;
