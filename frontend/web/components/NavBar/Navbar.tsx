"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
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
            <Button as={Link} href="/get-started" size="lg" color="success">
              Get Started
            </Button>
          </NavbarItem>
        )}

        {/* For smaller screens */}
        <NavbarItem className={styles.smallScreenItem}>
          {scrolled ? (
            <Button as={Link} href="/get-started" size="lg" color="success">
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
    </Navbar>
  );
};

export default NavBar;
