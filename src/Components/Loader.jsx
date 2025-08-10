import React from "react";
import { Cardio } from "ldrs/react";
import "ldrs/react/Cardio.css";

const Loader = ({ h }) => {
  return (
    // Default values shown
    <div className={`flex justify-center items-center ${h?"min-h-[calc(100vh-74px)]":"h-24"}`}>
      <Cardio size="50" stroke="4" speed="2" color="#ff3b58" />
    </div>
  );
};

export default Loader;
