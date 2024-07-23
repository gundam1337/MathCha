import styles from './ConceptSection.module.css';

const ConceptSection = () => {
  return (
    <section className={styles.conceptSection}>
      <div className={styles.description}>
        <h2>Master concepts in 15 minutes a day</h2>
        <p>Whether you&rsquo;re a complete beginner or ready to dive into machine learning and beyond, Brilliant makes it easy to level up fast with fun, bite-sized lessons.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.videoPlaceholder}>
          {/* Video placeholder */}
        </div>
        <div className={styles.explanation}>
          <h3>Effective, hands-on learning</h3>
          <p>Visual, interactive lessons make concepts feel intuitive — so even complex ideas just click. Our real-time feedback and simple explanations make learning efficient.</p>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;