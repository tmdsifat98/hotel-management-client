import React from "react";

const Button = ({ label, width, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`${
        width && width
      } btn border-0 button-common px-8 rounded-lg cursor-pointer text-black font-bold`}
    >
      {label}
    </button>
  );
};

export default Button;
