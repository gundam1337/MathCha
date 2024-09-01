import React from "react";
import { Input, Button } from "@nextui-org/react";
import PasswordInput from '@/components/PasswordInput/PasswordInput'
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>

      <div className={styles.formGroup}>
        <Input
          isRequired
          type="User name"
          label="User name"
          defaultValue="junior@nextui.org"
          className="max-w-xs"
        />

        <PasswordInput/>

        <div className={styles.passwordStrength}>
          <div className={styles.passwordStrengthBar}></div>
          <p className={styles.passwordStrengthText}>Password strength</p>
        </div>

        <Input
          isRequired
          type="email"
          label="email"
          defaultValue="junior@nextui.org"
          className="max-w-xs"
        />

        <Button color="primary" fullWidth className={styles.button}>
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default RegistrationForm;
