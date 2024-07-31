"use client";

import { useState } from "react";
import { Input, Button, Link } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import styles from "./SignUpComponent.module.css";

const SignUpComponent = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.leftColumn}>
            <div className={styles.greyBox}></div>
            <div className={styles.equationContainer}></div>
          </div>
          <div className={styles.rightColumn}>
            <h2 className={styles.title}>
              Create a free account to discover your personalized learning path
            </h2>
            <div className={styles.buttonGroup}>
              <Button
                startContent={<FcGoogle className={styles.buttonIcon} />}
                className={styles.socialButton}
                variant="bordered"
              >
                Google
              </Button>
              <Button
                startContent={
                  <FaFacebook
                    className={styles.buttonIcon}
                    style={{ color: "#1877F2" }}
                  />
                }
                className={styles.socialButton}
                variant="bordered"
              >
                Facebook
              </Button>
            </div>
            <p className={styles.orText}>OR</p>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <Button className={styles.signUpButton}>Sign up</Button>
            <p className={styles.termsText}>
              By clicking above, I agree to MathCha{" "}
              <Link href="#" className={styles.link}>
                Terms
              </Link>{" "}
              and{" "}
              <Link href="#" className={styles.link}>
                Privacy Policy
              </Link>
            </p>
            <p className={styles.loginText}>
              Existing user?{" "}
              <Link href="#" className={styles.loginLink}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;