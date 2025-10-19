import React from "react";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";
import Alert from "../../components/Alter/Alert";

const AlertPage = () => {
  return (
    <div>
      <h1>Alert</h1>
      <p>Feedback messages for user actions and important information.</p>
      <ComponentSection title="Alert Variants">
        <ComponentDemo
          title="Different Alert Types"
          description="Four semantic variants for different message types"
          component={
            <div>
              <Alert variant="info">
                This is an informational alert. Use it for general information.
              </Alert>
              <Alert variant="success">
                Success! Your changes have been saved successfully.
              </Alert>
              <Alert variant="warning">
                Warning: This action may have unintended consequences.
              </Alert>
              <Alert variant="error">
                Error: Something went wrong. Please try again.
              </Alert>
            </div>
          }
          code={`
            <Alert variant="info">
                This is an informational alert. Use it for general information.
            </Alert>
            <Alert variant="success">
                Success! Your changes have been saved successfully.
            </Alert>
            <Alert variant="warning">
                Warning: This action may have unintended consequences.
            </Alert>
            <Alert variant="error">
                Error: Something went wrong. Please try again.
            </Alert>
            `}
        />
      </ComponentSection>
    </div>
  );
};

export default AlertPage;
