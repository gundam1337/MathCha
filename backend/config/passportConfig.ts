import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Example: Define user interface based on your application
interface User {
    googleId: string;
    displayName: string;
}

// Passport serialization and deserialization
passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});

// Configure Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Logic to find or create the user in your database
    const user: User = { googleId: profile.id, displayName: profile.displayName };
    return done(null, user);
}));

// Export the configured passport for use in other files
export default passport;
