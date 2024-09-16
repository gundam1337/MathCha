import { Request, Response, NextFunction } from 'express';
import passport from '../../../config/passportConfig';  

// Initiate Google OAuth login
export const googleAuth = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};


export default googleAuth;