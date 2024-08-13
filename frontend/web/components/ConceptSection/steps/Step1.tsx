"use client";"use client";

import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import step1Styles from "./Step1.module.css";
import CourseModalContent from "../Modal/CourseModalContent";

export const Step1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={step1Styles.content}>
        <div className={step1Styles.videoContainer}>
          <video className={step1Styles.video} autoPlay muted loop playsInline>
            <source src="/demo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={step1Styles.explanation}>
          <h3>Effective, hands-on learning</h3>
          <p>
            Visual, interactive lessons make concepts feel intuitive — so even
            complex ideas just click. Our real-time feedback and simple
            explanations make learning efficient.
          </p>

          <Button color="primary" onClick={handleOpenModal}>
            View Courses
          </Button>
        </div>
      </div>
      <CourseModalContent isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};