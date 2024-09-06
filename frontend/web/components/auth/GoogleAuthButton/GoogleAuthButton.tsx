"use client";

import { useState, useCallback } from 'react';
import { Button } from "@nextui-org/react";
import { FcGoogle } from 'react-icons/fc';
import styles from './GoogleAuthButton.module.css'
import { initiateGoogleAuth } from '@/utils/api/auth'
import axios from 'axios';

export default function GoogleAuthButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    // Simulate a delay and then an error for testing purposes
    // setTimeout(() => {
    //   setIsLoading(false);
    //   setError('Failed to connect. Please try again.');
    // }, 5000);

    // Comment out the above setTimeout and uncomment the below code when ready for actual implementation
    /*
    try {
      const response = await axios.get('/api/auth/google');
      
      // Redirect to Google's OAuth page
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error initiating Google OAuth:', error);
      setError('Failed to connect. Please try again.');
    } finally {
      setIsLoading(false);
    }
    */
  }, []);

  return (
    <>
      <Button
        size="lg"
        className={`${styles.authButton} ${error ? styles.errorButton : ''}`}
        startContent={<FcGoogle className={styles.buttonIcon} />}
        onClick={handleGoogleLogin}
        isLoading={isLoading}
        color={error ? "danger" : "default"}
        spinner={
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
      >
        {isLoading ? 'Loading...' : error ? 'Try Again' : 'Log in with Google'}
      </Button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </>
  );
}