import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.aboutSection}>
          <div className={styles.sectionTitle}>
            <FaUser className={styles.icon} />
            <h2 className={styles.title}>Contact me</h2>
          </div>
          <div className={styles.contactInfo}>
            <FaPhone className={styles.icon} />
            <p>+1 555 123456</p>
          </div>
          <div className={styles.contactInfo}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:support@company.com" className={styles.email}>
              support@company.com
            </a>
          </div>
        </div>
        
        <div className={styles.companyInfo}>
          <h2 className={styles.title}>About MathCha</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;