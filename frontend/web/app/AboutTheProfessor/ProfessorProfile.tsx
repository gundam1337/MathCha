import React from 'react';
import Image from 'next/image';
import styles from './AboutProfessorPage.module.css';

interface ProfessorProfileProps {
  name: string;
  title: string;
  institution: string;
  quote: string;
  bio: string;
  imageUrl: string;
}

const ProfessorProfile: React.FC<ProfessorProfileProps> = ({
  name,
  title,
  institution,
  quote,
  bio,
  imageUrl
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.imageContainer}>
          <Image 
            src={imageUrl} 
            alt={name} 
            className={styles.profileImage}
            width={200}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.name}>Professor {name}, {title}</h1>
          <p className={styles.quote}>&#34;{quote}&#34;</p>
          <p className={styles.institution}>
            <span className={styles.institutionLabel}>Institution:</span> {institution}
          </p>
          <p className={styles.bio}>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;