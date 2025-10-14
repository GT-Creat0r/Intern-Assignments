import { useState } from "react";
import  Input  from "../../components/Input/Input";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const InputPage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Input</h1>
      <p>Form input components with labels.</p>
      <ComponentSection title="Basic Input">
        <ComponentDemo
          title="Input with Label"
          description="Standard Input field with label"
          component={
            <div>
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          }
          code={`
            <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />`}
        />
      </ComponentSection>

      <ComponentSection title="Usage">
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          <pre>
            <code>
              {`
              import {Input} from './components/Input.jsx';

                function MyComponent() {
                    const [value, setValue] = useState("");
                        return(
                            <Input 
                                label="Username"
                                type="text"
                                placeholder="Enter your username"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            )
                        }`}
            </code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default InputPage;
