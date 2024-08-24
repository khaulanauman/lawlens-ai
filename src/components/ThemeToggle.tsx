import { useEffect, useState } from "react";
import SidebarButton from "./SidebarButton";
import { ToggleLeft, ToggleRight } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
        document.body.className = savedTheme;
      }
    }
  }, []);

  useEffect(() => {
    // Only update localStorage and the document body class on the client side
    if (typeof window !== "undefined") {
      document.body.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SidebarButton
      name={(theme === "light" ? "Dark" : "Light") + " Mode"}
      children={<ToggleLeft />}
      handleClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
