import { useState } from "react";
import Textarea from "../../components/Textarea/Textarea";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const TextareaPage = () => {
  const [textareaValue, setTextareaValue] = useState("");
  return (
    <div>
      <h1>Textarea</h1>
      <p>Textarea component.</p>
      <ComponentSection title="Basic Textarea">
        <ComponentDemo
        title ="Textarea with Label"
          description="Multi-line text input"
          component={
            <div>
              <Textarea
                label="Description"
                placeholder="Enter a description..."
                rows={4}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </div>
          }
          code={`
        <Textarea
            label="Description" 
            placeholder="Enter a description..."
            rows={4}
            value={textareaValue}
            onChange={(e)=> setTextareaValue(e.target.value)}
        />
        `}
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
            <code>{`
            import {Textarea} from './components/Textarea.jsx';     

              function MyComponent() {
                    const [value, setValue] = useState("");
                        return(
                            <Textarea 
                                label="Bio"
                                placeholder="Tell us about yourself"
                                rows={4}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            )
                        }
            `}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default TextareaPage;
