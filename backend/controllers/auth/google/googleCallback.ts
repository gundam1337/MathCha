import { Request, Response, NextFunction } from 'express';
import passport from '../../../config/passportConfig';  

// Handle the Google OAuth callback and manage login/register
export const googleCallback = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('google', {
        failureRedirect: '/auth/login',
        successRedirect: '/dashboard',  // Adjust based on your flow
    })(req, res, next);
};


export default googleCallback;