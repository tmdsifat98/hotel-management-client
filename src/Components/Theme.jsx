import React from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useDarkMode } from "../Providers/ThemeProvider";

const Theme = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    // <button onClick={()=>setDarkMode(!darkMode)}>
    //   {darkMode ? <IoIosMoon /> : <IoIosSunny />}
    // </button>
    <label className="toggle text-base-content">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="theme-controller"
      />
      {darkMode ? <IoIosMoon /> : <IoIosSunny />}
    </label>
  );
};

export default Theme;
