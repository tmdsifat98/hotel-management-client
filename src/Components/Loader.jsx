import React from "react";
import { HashLoader } from "react-spinners";

const Loader = ({h}) => {
  return (
    <div className={`flex justify-center items-center ${h?"min-h-[calc(100vh-74px)]":"h-24"}`}>
      <HashLoader color="#02ebc4" />
    </div>
  );
};

export default Loader;
