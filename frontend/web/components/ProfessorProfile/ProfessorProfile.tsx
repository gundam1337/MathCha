// ProfessorProfile.tsx
import React from "react";
import Image from "next/image";
import styles from "./ProfessorProfile.module.css";
import Link from 'next/link'

const professorData = {
  name: "Omar Derkaoui",
  title: "PhD",
  quote: "Although the questions we're grappling with may have changed since the founding era, the examples of antiquity still challenge us to reflect on our own republic—its promises and its perils.",
  institution: "Stanford University",
  almaMater: "University of Michigan",
  imageUrl: "/path/to/image.jpg",
};

const ProfessorProfile: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <Image
            src={"/omar.jpg"}
            alt={professorData.name}
            width={400}
            height={400}
            className={styles.avatar}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{professorData.name}</h2>
          <span className={styles.title}>{professorData.title}</span>
          <p className={styles.quote}>&quot;{professorData.quote}&quot;</p>
          <div className={styles.info}>
            <p>
              <strong>Institution:</strong> {professorData.institution}
            </p>
            <p>
              <strong>Alma mater:</strong> {professorData.almaMater}
            </p>
          </div>

         
          <Link href="/AboutTheProfessor" className={styles.learnMore} >
          Learn More About This Professor →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;
