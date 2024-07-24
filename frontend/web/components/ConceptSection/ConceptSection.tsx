'use client';

import styles from "./ConceptSection.module.css";
import React, { useState, useRef, useEffect, use } from 'react';
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
  Flex
} from '@chakra-ui/react'

const EffectiveLearning = () => (
  <>
    <div className={styles.content}>
      <div className={styles.videoPlaceholder}></div>
      <div className={styles.explanation}>
        <h3>Effective, hands-on learning</h3>
        <p>
          Visual, interactive lessons make concepts feel intuitive — so even
          complex ideas just click. Our real-time feedback and simple
          explanations make learning efficient.
        </p>
      </div>
    </div>
  </>
);

const LearnAtYourLevel = () => (
  <>
    <div className={styles.content}>
      <div className={styles.videoPlaceholder}></div>
      <div className={styles.explanation}>
        <h3>Effective, hands-on learning</h3>
        <p>
          Visual, interactive lessons make concepts feel intuitive — so even
          complex ideas just click. Our real-time feedback and simple
          explanations make learning efficient.
        </p>
      </div>
    </div>
  </>
);

const GuidedLessons = () => (
  <>
    <div className={styles.content}>
      <div className={styles.videoPlaceholder}></div>
      <div className={styles.explanation}>
        <h3>Effective, hands-on learning</h3>
        <p>
          Visual, interactive lessons make concepts feel intuitive — so even
          complex ideas just click. Our real-time feedback and simple
          explanations make learning efficient.
        </p>
      </div>
    </div>
  </>
);

const steps = [
  { title: 'First', description: 'Effective Learning', content: <EffectiveLearning /> },
  { title: 'Second', description: 'Learn at Your Level', content: <LearnAtYourLevel /> },
  { title: 'Third', description: 'Guided Lessons', content: <GuidedLessons /> },
];

const ConceptSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  //const contentRefs = useRef(steps.map(() => React.createRef()));

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const activeIndex = contentRefs.current.findIndex((ref) => {
  //       if (ref.current) {
  //         const rect = ref.current.getBoundingClientRect();
  //         return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
  //       }
  //       return false;
  //     });
  //     if (activeIndex !== -1 && activeIndex !== activeStep) {
  //       setActiveStep(activeIndex);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [activeStep]);

  return (
    <section className={styles.conceptSection}>
      <Flex>
        <Box width="30%" position="sticky" top={0} height="100vh" className={styles.stepperContainer}>
          <Stepper index={activeStep} orientation='vertical' height='100%' gap='0'>
            {steps.map((step, index) => (
              <Step key={index} onClick={() => setActiveStep(index)} >
                <StepIndicator>
                  <StepStatus 
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <Box flexShrink='0'>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box width="70%" className={styles.contentContainer}>
          {steps.map((step, index) => (
            <Box key={index}  minHeight="100vh" className={styles.stepContent}>
              {step.content}
            </Box>
          ))}
        </Box>
      </Flex>
    </section>
  );
};

export default ConceptSection;



