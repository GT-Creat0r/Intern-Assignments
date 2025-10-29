import { useDimension } from "../../hooks/useDimension";
import { ComponentSection } from "../../layouts/ComponentLayout/ComponentLayout";

const UseDimensionPage = () => {
  const [ref, { width, height }] = useDimension();

  return (
    <div>
      <h1>useDimension</h1>
      <p>
        Measure and track the width and height of a DOM element using the{" "}
        <code>ResizeObserver</code> API.
      </p>

      <section className="component-section">
        <h3>Example</h3>
        <div className="component-demo">
          <div
            ref={ref}
            style={{
              resize: "both",
              overflow: "auto",
              border: "2px solid var(--border-primary, #ccc)",
              padding: "1rem",
              width: "250px",
              height: "120px",
              borderRadius: "8px",
            }}
          >
            Resize this box
          </div>
          <p style={{ marginTop: "10px" }}>
            Width: <strong>{width.toFixed(0)}px</strong> | Height:{" "}
            <strong>{height.toFixed(0)}px</strong>
          </p>
        </div>
      </section>

      <ComponentSection title="Usage">
        <div>
          <pre>
            <code>{`import { useDimension } from "../hooks/useDimension";

function Example() {
  const [ref, { width, height }] = useDimension();

  return (
    <div ref={ref}>
      Width: {width}px, Height: {height}px
    </div>
  );
}`}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default UseDimensionPage;
