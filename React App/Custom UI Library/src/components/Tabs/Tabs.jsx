import { createContext, useContext, useState } from "react";
import "./Tabs.css";

const TabsContext = createContext();

const Tabs = ({
  children,
  defaultValue,
  value: controlledValue,
  onChange,
  className = "",
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : internalValue;

  const handleChange = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    // <div className={`tabs ${className}`} {...props}>
    //   {typeof children === "function"
    //     ? children({ activeValue, onChange: handleChange })
    //     : children}
    // </div>

    <TabsContext.Provider value={{ activeValue, handleChange }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children, className = "", ...props }) => {
  return (
    <div className={`tab-list ${className}`} role="tablist" {...props}>
      {children}
    </div>
  );
};

const Tab = ({
  children,
  value,
  // active = false,
  // onClick,
  disabled = false,
  className = "",
  ...props
}) => {

  const {activeValue,handleChange}=useContext(TabsContext);
  const isActive= activeValue ===value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      className={`tab ${isActive ? "tab-active" : ""} ${className}`}
      onClick={() => handleChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children, className = "", ...props }) => {
  return (
    <div className={`tab-panels ${className}`} {...props}>
      {children}
    </div>
  );
};

const TabPanel = ({
  children,
  value,
  // active = false,
  className = "",
  ...props
}) => {
  const {activeValue} =useContext(TabsContext)
  if (activeValue !== value) return null;

  return (
    <div className={`tab-panel ${className}`} role="tabpanel" {...props}>
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanels, TabPanel };
