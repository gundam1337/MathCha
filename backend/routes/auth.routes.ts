import express from 'express';

import login  from '../controllers/auth/email/authLogin';
import register from '../controllers/auth/email/authRegister';

import googleAuth from '../controllers/auth/google/googleAuth';
import googleCallback from '../controllers/auth/google/googleCallback';



const router = express.Router();

// Email/Password routes
router.post('/signin', login);  // For email/password login
router.post('/signup', register);  // For email/password registration

// Google OAuth routes (handles both login and registration)
router.get('/google', googleAuth);  // Initiate Google OAuth
router.get('/google/callback', googleCallback);  // Handle Google OAuth callback and manage login/register




// googleAuth: Initiates the Google OAuth process and redirects the user to Google's login page.
// googleCallback: Handles the callback from Google. It checks if the user exists in your database:
// If they exist, it logs them in.
// If they don't exist, it registers them and logs them in.
export default router;