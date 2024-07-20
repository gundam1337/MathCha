import styles from './Hero.module.css';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Hero;