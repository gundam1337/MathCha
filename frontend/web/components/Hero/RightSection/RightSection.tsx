import styles from "./RightSection.module.css";

const RightSection: React.FC = () => {
  return (
    <div className={styles.rightSection}>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default RightSection;
