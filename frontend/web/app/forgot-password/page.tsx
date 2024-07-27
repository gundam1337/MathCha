import React from 'react';
import { Input, Button, Link } from "@nextui-org/react";
import styles from './ForgotPassword.module.css';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Forgot your password?</h2>
      
      <Input
        fullWidth
        placeholder="E-mail address"
        aria-label="E-mail address"
        className={styles.input}
      />
      
      <Button 
        className={styles.button}
      >
        Reset password
      </Button>
      
      <p className={styles.helpText}>
        If you have any trouble resetting your password,<br />
        contact us at <Link href="mailto:support@MathCha.org">support@MathCha.org</Link>.
      </p>
    </div>
  );
};

export default ForgotPasswordPage;