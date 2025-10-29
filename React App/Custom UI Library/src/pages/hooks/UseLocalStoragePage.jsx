import useLocalStorage from "../../hooks/useLocalStorage";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const UseLocalStoragePage = () => {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h1>useLocalStorage</h1>
      <p>
        A custom React hook that syncs state with localStorage, allowing data
        persistence across page reloads.
      </p>

      <section className="component-section">
        <h3>Example</h3>
        <div className="component-demo">
          <label htmlFor="name">Enter your name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name..."
            style={{
              padding: "8px",
              marginTop: "6px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              width: "200px",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            Hello, <strong>{name || "Guest"}</strong> (Saved in localStorage)
          </p>
        </div>
      </section>

      <ComponentSection title="Usage">
        <div>
          <pre>
            <code>{`import { useLocalStorage } from "../hooks/useLocalStorage";

function Example() {
  const [name, setName] = useLocalStorage("username", "");  
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}`}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default UseLocalStoragePage;
