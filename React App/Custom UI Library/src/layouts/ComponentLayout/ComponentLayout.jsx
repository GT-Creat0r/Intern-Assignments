import { useState } from "react";
import "../ComponentLayout/ComponentLayout.css";

const ComponentDemo = ({ title, description, component, code }) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="component-demo">
      <div className="component-demo-header">
        <div>
          <h3 className="component-demo-title">{title}</h3>
          {description && (
            <p className="component-demo-description">{description}</p>
          )}
        </div>
        <button
          className="component-demo-toggle"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      </div>

      <div className="component-demo-preview">{component}</div>

      {showCode && code && (
        <div className="component-demo-code">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

const ComponentSection = ({ title, children }) => {
  return (
    <section className="component-section">
      <h2 className="component-section-title">{title}</h2>
      {children}
    </section>
  );
};

export { ComponentDemo, ComponentSection };
