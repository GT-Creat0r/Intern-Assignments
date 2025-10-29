import { useState } from "react";
import { usePrevious } from "../../hooks/usePrevious";
import { ComponentSection } from "../../layouts/ComponentLayout/ComponentLayout";
import useLocalStorage from "../../hooks/useLocalStorage";

const UsePreviousPage = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>usePrevious</h1>
      <p>Keeps track of the previous value of a variable across renders.</p>

      <section className="component-section">
        <h3>Example</h3>
        <div className="component-demo">
          <p>
            Current Count: <strong>{count}</strong>
          </p>
          <p>
            Previous Count:{" "}
            <strong >
              {prevCount ?? "N/A"}
            </strong>
          </p>
          <button
            onClick={() => setCount((c) => c + 1)}
            style={{
              padding: "8px 16px",
              marginTop: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
              background: "#fafafa",
            }}
          >
            Increment
          </button>
        </div>
      </section>

      <ComponentSection title="Usage">
        <div>
          <pre>
            <code>{`import { usePrevious } from "../hooks/usePrevious";

function Example({ value }) {
  const prevValue = usePrevious(value);
  return <div>Previous: {prevValue}</div>;
}
            `}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default UsePreviousPage;
