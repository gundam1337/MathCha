import NextLink from 'next/link';  // Renamed to NextLink for clarity
import {Button, Link } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import styles from "./SignUpComponent.module.css";

const SignUpComponent: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <SignUpLayout />
      </div>
    </div>
  );
};

const SignUpLayout: React.FC = () => (
  <div className={styles.flex}>
    <LeftColumn />
    <RightColumn />
  </div>
);

const LeftColumn: React.FC = () => (
  <div className={styles.leftColumn}>
    <div className={styles.greyBox}></div>
    <div className={styles.equationContainer}></div>
  </div>
);

const RightColumn: React.FC = () => (
  <div className={styles.rightColumn}>
    <h2 className={styles.title}>
      Create a free account to discover your personalized learning path
    </h2>
    <SocialButtons />
    <p className={styles.orText}>OR</p>
    <EmailSignUp />
    <TermsAndConditions />
    <LoginPrompt />
  </div>
);

const SocialButtons: React.FC = () => (
  <div className={styles.buttonGroup}>
    <SocialButton
      icon={<FcGoogle className={styles.buttonIcon} />}
      text="Google"
    />
    <SocialButton
      icon={<FaFacebook className={styles.buttonIcon} style={{ color: "#1877F2" }} />}
      text="Facebook"
    />
  </div>
);

const SocialButton: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <Button
    startContent={icon}
    className={styles.socialButton}
    variant="bordered"
  >
    {text}
  </Button>
);

const EmailSignUp: React.FC = () => (
  <NextLink href="/connect/signup/EmailSignup" passHref>
    <Button as="a" className={styles.signUpButton}>
      email
    </Button>
  </NextLink>
);

const TermsAndConditions: React.FC = () => (
  <p className={styles.termsText}>
    By clicking above, I agree to MathCha{" "}
    <Link href="#" className={styles.link}>Terms</Link> and{" "}
    <Link href="#" className={styles.link}>Privacy Policy</Link>
  </p>
);

const LoginPrompt: React.FC = () => (
  <p className={styles.loginText}>
    Existing user?{" "}
    <Link href="#" className={styles.loginLink}>Log in</Link>
  </p>
);

export default SignUpComponent;