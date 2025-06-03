import React from "react";
import AuthContext from "./AuthContext";

const ContextProvider = ({ children }) => {
  const userInfo = { name: "mango" };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
