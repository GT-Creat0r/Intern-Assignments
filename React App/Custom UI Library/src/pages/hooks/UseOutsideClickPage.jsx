import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ComponentSection } from "../../layouts/ComponentLayout/ComponentLayout";

const UseOutsideClickPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div>
      <h1>useOutsideClick</h1>
      <p>
        Detects clicks outside a referenced element and triggers a callback.
        Useful for modals, dropdowns, and popovers.
      </p>

      <section className="component-section">
        <h3>Example</h3>
        <div className="component-demo">
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "8px 16px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
              background: "#fafafa",
            }}
          >
            Open Box
          </button>

          {isOpen && (
            <div
              ref={ref}
              style={{
                marginTop: "1rem",
                padding: "1rem",
                border: "2px solid #ccc",
                borderRadius: "8px",
                width: "250px",
                background: "#fff",
              }}
            >
              <p>Click outside this box to close it.</p>
            </div>
          )}
        </div>
      </section>

      <ComponentSection title="Usage">
        <div>
          <pre>
            <code>{`import { useOutsideClick } from "../hooks/useOutsideClick";

function Example() {
  const ref = useOutsideClick(() => console.log("Clicked outside!"));

  return (
    <div ref={ref}>
      <p>Click outside this box to trigger the callback.</p>
    </div>
  );
}
        `}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default UseOutsideClickPage;
