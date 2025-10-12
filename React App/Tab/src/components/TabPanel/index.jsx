import "../TabPanels/styles.css";
import { useTabs } from "../Tabs";

export const TabPanel = ({ children, index }) => {
  const { activeIndex } = useTabs();
  return (
    <div
      className={`tab-panel ${activeIndex === index ? "active" : "hidden"}`}
    >
      {children}
    </div>
  );
};
