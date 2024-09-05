"use client";

import { useState } from 'react';
import { Button, Spinner } from "@nextui-org/react";
import { FcGoogle } from 'react-icons/fc';
import styles from './GoogleAuthButton.module.css'
import axios from 'axios';

export default function GoogleAuthButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/auth/google');
      
      // Redirect to Google's OAuth page
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error initiating Google OAuth:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  // Test function to simulate loading
  const testLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Button
      size="lg"
      className={styles.authButton}
      startContent={isLoading ? <Spinner size="sm" /> : <FcGoogle className={styles.buttonIcon} />}
      onClick={process.env.NODE_ENV === 'development' ? testLoading : handleGoogleLogin}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Log in with Google'}
    </Button>
  );
}