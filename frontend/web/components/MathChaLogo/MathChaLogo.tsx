import React from "react";
import styles from './MathChaLogo.module.css';

const MathChaLogo = () => (
  <svg 
    viewBox="178.276 79.102 293.979 80.285" 
    xmlns="http://www.w3.org/2000/svg" 
    className={styles.logo}
  >
    <defs>
      <style>
        @import url(https://fonts.googleapis.com/css2?family=Mate%3Aital%2Cwght%400%2C400%3B1%2C400&amp;display=swap);
      </style>
    </defs>
    <text 
      className={styles.logoText}
      style={{
        fill: "rgb(51, 51, 51)",
        fontFamily: "Mate",
        whiteSpace: "pre"
      }} 
      x="179.752" 
      y="140.053"
    >
      MathCha
    </text>
  </svg>
);

export default MathChaLogo;