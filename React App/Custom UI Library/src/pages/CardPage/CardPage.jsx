import Card from "../../components/Card/Card";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const CardPage = () => {
  return (
    <div>
      <h1>Card</h1>
      <p>A flexible container component.</p>

      <ComponentSection title="Variants">
        <ComponentDemo
          title="Card Variants"
          description="Different card styles"
          component={
            <>
              <Card variant="default" style={{ width: "280px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Default Card</h4>
                <p style={{ margin: "0" }}>
                  Card with border and subtle shadow
                </p>
              </Card>
              <Card variant="elevated" style={{ width: "280px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Elevated Card</h4>
                <p style={{ margin: "0" }}>Card with elevated shadow effect</p>
              </Card>
              <Card variant="outlined" style={{ width: "280px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Outlined Card</h4>
                <p style={{ margin: "0" }}>Card with bold outline </p>
              </Card>
            </>
          }
          code={` 
            <Card variant="default" style={{ width: "280px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Default Card</h4>
                <p style={{ margin: "0" }}>Card with border and subtle shadow</p>
            </Card>
            <Card variant="elevated" style={{ width: "280px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Elevated Card</h4>
                <p style={{ margin: "0" }}>Card with elevated shadow effect</p>
            </Card>
            <Card variant="outlined" style={{ width: "280px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Outlined Card</h4>
                <p style={{ margin: "0" }}>Card with bold outline </p>
            </Card>`}
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
            import { Card } from './components';

                function MyComponent() {
                    return (
                        <Card variant="default" style={{ width: "280px" }}>
                            <h4 style={{ margin: "0 0 8px 0" }}>Default Card</h4>
                            <p style={{ margin: "0" }}>Card with border and subtle shadow</p>
                        </Card>
                        <Card variant="elevated" style={{ width: "280px" }}>
                            <h4 style={{ margin: "0 0 8px 0" }}>Elevated Card</h4>
                            <p style={{ margin: "0" }}>Card with elevated shadow effect</p>
                        </Card>
                        <Card variant="outlined" style={{ width: "280px" }}>
                            <h4 style={{ margin: "0 0 8px 0" }}>Outlined Card</h4>
                            <p style={{ margin: "0" }}>Card with bold outline </p>
                        </Card>
                    );
            }`}</code>
          </pre>
        </div>
      </ComponentSection>
    </div>
  );
};

export default CardPage;
