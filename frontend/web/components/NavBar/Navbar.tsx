"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import  QuizModal from '@/components/QuizModal/QuizModal'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import MathChaLogo from "@/components/MathChaLogo/MathChaLogo";
import LoginModal from "../auth/LoginModal";
import useScroll from "@/hooks/useScroll";

const NavBar: React.FC = () => {
  const scrolled = useScroll(50);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const handleCloseQuizModal = () => setIsQuizModalOpen(false);
  const handleGetStartedClick = () => setIsQuizModalOpen(true);

  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Navbar maxWidth="full" className={styles.navbar}>
      <NavbarBrand>
        <MathChaLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        {/* For larger screens */}
        <NavbarItem className={styles.largeScreenItem}>
          <Button onClick={handleLoginClick} size="lg" variant="bordered">
            Login
          </Button>
        </NavbarItem>
        {scrolled && (
          <NavbarItem className={styles.largeScreenItem}>
            <Button  onClick={handleGetStartedClick} size="lg" color="success">
              Get Started
            </Button>
          </NavbarItem>
        )}

        {/* For smaller screens */}
        <NavbarItem className={styles.smallScreenItem}>
          {scrolled ? (
            <Button  onClick={handleGetStartedClick} size="lg" color="success">
              Get Started
            </Button>
          ) : (
            <Button onClick={handleLoginClick} size="lg" variant="bordered">
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      <QuizModal isOpen={isQuizModalOpen} onClose={handleCloseQuizModal} />
    </Navbar>
  );
};

export default NavBar;
