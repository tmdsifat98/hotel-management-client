import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex min-h-[calc(100vh-74px)] justify-center items-center">
      <HashLoader color="#02ebc4" />
    </div>
  );
};

export default Loader;
