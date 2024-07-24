import React from "react";
import styles from "./subjectCards.module.css";
import { FaLaptopCode, FaFlask } from "react-icons/fa";
import { TbMathIntegralX } from "react-icons/tb";

const SubjectCards: React.FC = () => {
  const subjects = [
    { name: "Math", Icon: TbMathIntegralX },
    { name: "Computer Science & Programming", Icon: FaLaptopCode },
    { name: "Science & Engineering", Icon: FaFlask },
  ];

  return (
    <div className={styles.subjectCards}>
      {subjects.map((subject, index) => (
        <div key={index} className={styles.card}>
          <subject.Icon className={styles.icon} />
          <span className={styles.name}>{subject.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SubjectCards;
