import Button from "../../components/Button/Button";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const ButtonPage = () => {
  return (
    <div>
      <h1>Button</h1>
      <p>A customizable button component with multiple variants.</p>
      <ComponentSection title="Variants">
        <ComponentDemo
          title="Button Variants"
          description="Different button styles for various use cases"
          component={
            <>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
            </>
          }
          code={`
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>`}
        />
      </ComponentSection>
    </div>
  );
};

export default ButtonPage;
