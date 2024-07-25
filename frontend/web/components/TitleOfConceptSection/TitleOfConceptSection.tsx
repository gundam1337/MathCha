"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './TitleOfConceptSection.module.css';

const TitleOfConceptSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["step 1:  learning ", "step 2:  training ", "step 3:  testing "],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How to Learn Math</h1>
      <span ref={typedRef} className={styles.typedText}></span>
    </div>
  );
};

export default TitleOfConceptSection;