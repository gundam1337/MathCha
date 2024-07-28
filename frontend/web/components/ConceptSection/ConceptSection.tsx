"use client";

import styles from "./ConceptSection.module.css";
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Box,
} from "@chakra-ui/react";
import {Step1, Step2, Step3} from './Steps'


const steps = [
  { title: "Step 1", description: "Learning", content: <Step1 /> },
  { title: "Step 2", description: "Training", content: <Step2 /> },
  { title: "Step 3", description: "Test", content: <Step3 /> },
];

const ConceptSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={styles.conceptSection}>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepWrapper}>
            <div className={styles.stepperSide}>
              <Stepper index={activeStep} orientation="vertical" gap="0">
                <Step onClick={() => setActiveStep(index)}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>
                  <StepSeparator className="black"/>
                </Step>
              </Stepper>
            </div>
            <div className={styles.contentSide}>
              <div
                className={`${styles.stepContent} ${
                  activeStep === index ? styles.active : ""
                }`}
              >
                {step.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConceptSection;
