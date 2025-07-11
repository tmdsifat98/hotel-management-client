import React from "react";
import { useDarkMode } from "../Providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";

const Theme = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <label className="toggle text-base-content">
      <input
        type="checkbox"
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode && "checked"}
        className="theme-controler rounded-full p-1 bg-orange-500 checked:bg-indigo-400 checked:text-indigo-800"
      />
      <IoSunny />
      <IoMoon />
    </label>
  );
};

export default Theme;
