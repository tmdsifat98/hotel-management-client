import React from "react";
import { Outlet } from "react-router";
import AuthContext from "../Providers/AuthContext";

const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
