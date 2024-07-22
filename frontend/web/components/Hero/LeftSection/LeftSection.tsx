// LeftSection.tsx
import styles from "./LeftSection.module.css";
import { Button, Link } from "@nextui-org/react";

const LeftSection: React.FC = () => {
  return (
    <div className={styles.leftSection}>
      <h1 className={styles.title}>
        Learn by <span className={styles.highlight}>doing</span>
      </h1>
      <p className={styles.subtitle}>
        Guided interactive problem solving that&apos;s effective and fun. Master
        concepts in 15 minutes a day.
      </p>
      <Button
        className="
         w-[70%]
         shadow-md hover:shadow-lg transition-shadow duration-300"
        as={Link}
        href="#"
        size="lg"
        radius="full"
        color="success"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default LeftSection;
