import { useEffect, useState } from "react";
import Moon from "./assets/Moon";
import Sun from "./assets/Sun";

interface Props {
  style: CSSModuleClasses[string];
}

function DarkMode({ style }: Props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    setTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");

    setTheme("light");
  };

  const toggleDarkMode = () => {
    if (theme === "light") {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        className={style}
        key={"dark-mode"}
        onClick={toggleDarkMode}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </>
  );
}

export default DarkMode;
