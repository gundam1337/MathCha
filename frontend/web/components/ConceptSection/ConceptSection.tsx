"use client";

import styles from "./ConceptSection.module.css";
import { useState } from "react";
import { Tabs, Tab, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Step1, Step2, Step3 } from './Steps';

const steps = [
  { title: "Step 1", description: "Learning", content: <Step1 /> },
  { title: "Step 2", description: "Training", content: <Step2 /> },
  { title: "Step 3", description: "Test", content: <Step3 /> },
];

const ConceptSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.conceptSection}>
      <Tabs 
        selectedKey={activeStep.toString()} 
        onSelectionChange={(key) => setActiveStep(Number(key))}
        className={styles.tabsContainer}
      >
        {steps.map((step, index) => (
          <Tab key={index} title={step.title} className={styles.tab}>
            <Card>
              <CardBody>
                <h3 className="font-bold">{step.title}: {step.description}</h3>
                {step.content}
              </CardBody>
              <CardFooter>
                <div className={styles.buttonContainer}>
                  <Button 
                    onClick={handlePrevStep} 
                    disabled={index === 0}
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={handleNextStep} 
                    disabled={index === steps.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};

export default ConceptSection;