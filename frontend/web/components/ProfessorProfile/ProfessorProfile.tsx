// ProfessorProfile.tsx
import React from 'react';
import Image from 'next/image';
import styles from './ProfessorProfile.module.css';

interface ProfessorProfileProps {
  name: string;
  title: string;
  quote: string;
  institution: string;
  almaMater: string;
  imageUrl: string;
}

const ProfessorProfile: React.FC<ProfessorProfileProps> = ({
  name,
  title,
  quote,
  institution,
  almaMater,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <Image
            src={"/omar.jpg"}
            alt={name}
            width={120}
            height={120}
            className={styles.avatar}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.title}>{title}</span> 
          <p className={styles.quote}>&quot;{quote}&quot;</p>
          <div className={styles.info}>
            <p><strong>Institution:</strong> {institution}</p>
            <p><strong>Alma mater:</strong> {almaMater}</p>
          </div>
          {/* TODO add the protflio in the section  */}
          <a href="#" className={styles.learnMore}>
            Learn More About This Professor →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;