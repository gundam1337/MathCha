import Quiz from "./Quiz";
import { Modal, ModalContent } from "@nextui-org/react";
import styles from "./QuizModal.module.css";
import MathChaLogo from "../MathChaLogo/MathChaLogo";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

//TODO add the logo to modal and at the end disply a login way

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          base: styles.modalBase,
          backdrop: styles.modalBackdrop,
        }}
      >
        <ModalContent>
          <div className={styles.logoContainer}>
            <MathChaLogo />
          </div>
          <Quiz />
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizModal;
