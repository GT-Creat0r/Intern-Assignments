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
          title="Textarea with Label"
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
    </div>
  );
};

export default TextareaPage;
