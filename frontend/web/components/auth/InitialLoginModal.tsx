import React from "react";
import { ModalBody, Button } from "@nextui-org/react";
import styles from "./LoginModal.module.css";
import MathChaLogo from "@/components/MathChaLogo/MathChaLogo";
import GoogleAuthButton from "./GoogleAuthButton/GoogleAuthButton";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

interface InitialLoginModalProps {
  onEmailLoginClick: () => void;
}

const InitialLoginModal: React.FC<InitialLoginModalProps> = ({
  onEmailLoginClick,
}) => {
  return (
    <ModalBody className={styles.modalBody}>
      <div className={styles.logoContainer}>
        <MathChaLogo />
      </div>
      <h2 className={styles.title}>
        The best way to learn math and computer science.
      </h2>
      <div className={styles.buttonContainer}>
        <GoogleAuthButton />

        <Button
          size="lg"
          className={styles.emailButton}
          startContent={<MdEmail className={styles.buttonIcon} />}
          onClick={onEmailLoginClick}
        >
          Log in with Email
        </Button>
      </div>
      <p className={styles.signupText}>
        New user?{" "}
        <Link href="/connect/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </p>
    </ModalBody>
  );
};

export default InitialLoginModal;
