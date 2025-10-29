import { useState } from "react";
import Slider from "../../components/Slider/Slider";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const SliderPage = () => {
  const [value, setValue] = useState(50);

  return (
    <div>
      <h1>Slider</h1>
      <p>Range input component for selecting numeric values.</p>

      <ComponentSection title="Basic Slider">
        <ComponentDemo
          title="Simple Slider"
          description="Basic slider with label and value display"
          component={
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <Slider
                label="Volume"
                value={value}
                onChange={setValue}
                min={0}
                max={100}
              />
            </div>
          }
          code={`const [value, setValue] = useState(50);

<Slider
  label="Volume"
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`}
        />
      </ComponentSection>
    </div>
  );
};

export default SliderPage;
