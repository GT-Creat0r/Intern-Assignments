import { useEffect } from "react";
import { useTheme } from "../../context/theme-context";
import { useIntersection } from "../../hooks/useIntersection";
import { FaSun, FaMoon } from "react-icons/fa";
import "./theme-toggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [ref, isVisible] = useIntersection({ threshold: 0.5 });

  // Automatically toggle theme when element is in view
  useEffect(() => {
    if (isVisible) toggleTheme();
  }, [isVisible]);

  return (
    <>
      <div
        ref={ref}
        className="theme-toggle"
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        {theme === "light" ? <FaSun /> : <FaMoon />}
        &nbsp;Scroll me into view
      </div>
    </>
  );
};

export default ThemeToggle;
