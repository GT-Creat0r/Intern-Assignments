import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "../../components/Accordion/Accordion";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const AccordionPage = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <p>Collapsible content panels for organizing information.</p>
      <ComponentSection title="Basic Accordion">
        <ComponentDemo
          title="Simple Accordion"
          description="Single item open at a time"
          component={
            <Accordion defaultValue={["item1"]}>
              <AccordionItem id="item1">
                <AccordionTrigger id="item1">What is React?</AccordionTrigger>
                <AccordionPanel id="item1">
                  React is a JavaScript library for building user interfaces.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="item2">
                <AccordionTrigger id="item2">
                  Why use components?
                </AccordionTrigger>
                <AccordionPanel id="item2">
                  Components let you split the UI into reusable pieces.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="item3">
                <AccordionTrigger id="item3">What are props?</AccordionTrigger>
                <AccordionPanel id="item3">
                  Props are inputs passed into React components to make them
                  dynamic.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          }
          code={` <Accordion defaultValue={["item1"]}>
    <AccordionItem id="item1">
        <AccordionTrigger id="item1">What is React?</AccordionTrigger>
            <AccordionPanel id="item1">
                React is a JavaScript library for building user interfaces.
            </AccordionPanel>
    </AccordionItem>

    <AccordionItem id="item2">
        <AccordionTrigger id="item2">Why use components?</AccordionTrigger>
           <AccordionPanel id="item2">
                Components let you split the UI into reusable pieces.
            </AccordionPanel>
    </AccordionItem>

    <AccordionItem id="item3">
        <AccordionTrigger id="item3">What are props?</AccordionTrigger>
            <AccordionPanel id="item3">
                Props are inputs passed into React components to make them dynamic.
            </AccordionPanel>
    </AccordionItem>
</Accordion>
            `}
        />
      </ComponentSection>
    </div>
  );
};

export default AccordionPage;
