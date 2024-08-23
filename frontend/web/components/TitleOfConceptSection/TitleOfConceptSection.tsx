"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./TitleOfConceptSection.module.css";

const TitleOfConceptSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["step 1: learning", "step 2: training", "step 3: testing"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How to Learn Math</h1>
      <div className={styles.typedContainer}>
        <span ref={typedRef}></span>
      </div>
    </div>
  );
};

export default TitleOfConceptSection;