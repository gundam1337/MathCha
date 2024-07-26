import React from 'react';
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import styles from './LoginModal.module.css';
import MathChaLogo from '@/components/MathChaLogo/MathChaLogo';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      classNames={{
        base: styles.modalBase,
        backdrop: styles.modalBackdrop,
      }}
    >
      <ModalContent>
        <ModalBody className={styles.modalBody}>
          <div className={styles.logoContainer}>
            <MathChaLogo />
          </div>
          <h2 className={styles.title}>The best way to learn math and computer science.</h2>
          <div className={styles.buttonContainer}>
            <Button
              size="lg"
              className={styles.authButton}
              startContent={<FcGoogle className={styles.buttonIcon} />}
            >
              Log in with Google
            </Button>
            <Button
              size="lg"
              className={styles.authButton}
              startContent={<FaFacebook className={styles.buttonIcon} style={{color: '#1877F2'}} />}
            >
              Log in with Facebook
            </Button>
            <Button 
              size="lg"
              className={styles.emailButton}
              startContent={<MdEmail className={styles.buttonIcon} />}
            >
              Log in with Email
            </Button>
          </div>
          <p className={styles.signupText}>
            New user? <a href="#" className={styles.signupLink}>Sign up</a>
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;