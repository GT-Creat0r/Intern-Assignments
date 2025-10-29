import { createContext, useContext, useState } from "react";
import "./Accordion.css";

const AccordionContext = createContext();

export function Accordion({
  defaultValue = [],
  allowMultiple = false,
  children,
  className = "",
  ...props
}) {
  const [openItems, setOpenItems] = useState(defaultValue);

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={`accordion ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ id, children, className = "", ...props }) {
  const { openItems } = useContext(AccordionContext);
  const isOpen = openItems.includes(id);

  return (
    <div
      className={`accordion-item ${className}`}
      data-open={isOpen}
      {...props}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({ id, disabled = false, children, className = "", ...props }) {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const isOpen = openItems.includes(id);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && toggleItem(id)}
      aria-expanded={isOpen}
      className={`accordion-trigger ${isOpen ? "accordion-trigger-open" : ""} ${className}`}
      {...props}
    >
      <span className="accordion-title">{children}</span>
      <span
        className={`accordion-icon ${isOpen ? "accordion-icon-open" : ""}`}
      >
        ▼
      </span>
    </button>
  );
}

export function AccordionPanel({ id, children, className = "", ...props }) {
  const { openItems } = useContext(AccordionContext);
  const isOpen = openItems.includes(id);

  return (
    <div
      className={`accordion-content ${isOpen ? "accordion-content-open" : ""} ${className}`}
      aria-hidden={!isOpen}
      {...props}
    >
      <div className="accordion-content-inner">{children}</div>
    </div>
  );
}
