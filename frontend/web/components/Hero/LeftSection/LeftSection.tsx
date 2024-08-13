"use client";
import { useState } from "react";
import styles from "./LeftSection.module.css";
import { Button } from "@nextui-org/react";
import  QuizModal from '@/components/QuizModal/QuizModal'

const LeftSection: React.FC = () => {

  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const handleCloseQuizModal = () => setIsQuizModalOpen(false);
  const handleGetStartedClick = () => setIsQuizModalOpen(true);

  return (
    <div className={styles.leftSection}>
      <h1 className={styles.title}>
      Master through <span className={styles.highlight}>practice</span>
      </h1>
      <p className={styles.subtitle}>
        Guided interactive problem solving that&apos;s effective and fun. Master
        concepts in 15 minutes a day.
      </p>
      <Button
        className="w-[70%] shadow-md hover:shadow-lg transition-shadow duration-300"
        style={{
          fontSize: "1.2  rem",
          fontWeight: 550,
          padding: "1rem 2rem",
        }}
        onClick={handleGetStartedClick}
        size="lg"
        radius="full"
        color="success"
      >
        Get started
      </Button>

      <QuizModal isOpen={isQuizModalOpen} onClose={handleCloseQuizModal} />
    </div>
  );
};

export default LeftSection;
