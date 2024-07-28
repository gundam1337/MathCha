"use client";

import { useState } from 'react';
import styles from './SignUpComponent.module.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [isLargerThan768, setIsLargerThan768] = useState(false);

  useState(() => {
    const checkScreenSize = () => {
      setIsLargerThan768(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {isLargerThan768 && (
          <div className={styles.leftColumn}>
            <div className={styles.placeholderBox}></div>
            
          </div>
        )}
        <div className={styles.rightColumn}>
          <h2 className={styles.title}>
            Create a free account to discover your personalized learning path
          </h2>
          <div className={styles.buttonGroup}>
            <button className={`${styles.button} ${styles.googleButton}`}>
              <FaGoogle style={{ marginRight: '0.5rem' }} /> Google
            </button>
            <button className={`${styles.button} ${styles.facebookButton}`}>
              <FaFacebook style={{ marginRight: '0.5rem' }} /> Facebook
            </button>
          </div>
          <p className={styles.orText}>OR</p>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.signUpButton}>Sign up</button>
          <p className={styles.termsText}>
            By clicking above, I agree to the Terms and Privacy Policy
          </p>
          <p className={styles.loginText}>
            Existing user? <a href="#" className={styles.loginLink}>Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;