// LeftSection.tsx
import styles from './LeftSection.module.css';

const LeftSection: React.FC = () => {
  return (
    <div className={styles.leftSection}>
      <h1 className={styles.title}>
        Learn by <span className={styles.highlight}>doing</span>
      </h1>
      <p className={styles.subtitle}>
        Guided interactive problem solving that's effective and fun. Master concepts in 15 minutes a day.
      </p>
      <button className={styles.getStartedButton}>
        Get started
      </button>
    </div>
  );
};

export default LeftSection;