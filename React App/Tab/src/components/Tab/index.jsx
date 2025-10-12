import { useTabs } from "../Tabs";
import "../Tabs/styles.css";

export const Tab = ({ children, index }) => {
  const { activeIndex, setActiveIndex } = useTabs();

  return (
    <button
      className={`tab-button ${activeIndex === index ? "active" : ""}`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};
