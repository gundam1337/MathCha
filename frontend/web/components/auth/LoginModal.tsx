import React, { useState } from 'react';
import { Modal, ModalContent } from "@nextui-org/react";
import styles from './LoginModal.module.css';
import InitialLoginModal from './InitialLoginModal';
import EmailLoginModal from './EmailLoginModal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  const handleEmailLoginClick = () => {
    setShowEmailLogin(true);
  };

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
        {!showEmailLogin ? (
          <InitialLoginModal onEmailLoginClick={handleEmailLoginClick} />
        ) : (
          <EmailLoginModal onClose={onClose} />
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;