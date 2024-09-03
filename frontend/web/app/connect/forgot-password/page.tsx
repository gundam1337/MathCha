import React from "react";
import { Input, Button, Link } from "@nextui-org/react";
import styles from "./ForgotPassword.module.css";
import NavBar from "@/components/NavBar/Navbar";



export default function ForgotPasswordPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.leftColumn}>
            <div className={styles.greyBox}></div>
            <div className={styles.equationContainer}></div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.ForgotPasswordContainer}>
              <h2 className={styles.heading}>Forgot your password?</h2>

              <Input
                fullWidth
                placeholder="E-mail address"
                aria-label="E-mail address"
                className={styles.input}
              />

              <Button className={styles.button}>Reset password</Button>

              <p className={styles.helpText}>
                If you have any trouble resetting your password,
                <br />
                contact us at{" "}
                <Link href="mailto:support@MathCha.org">
                  support@MathCha.org
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
