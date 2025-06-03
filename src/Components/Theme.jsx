import React, { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <label className="toggle text-base-content">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "synthwave"}
        className="theme-controller"
      />
      <IoIosMoon /> <IoIosSunny />
    </label>
  );
};

export default Theme;
