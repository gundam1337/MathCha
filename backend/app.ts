import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from './config/passportConfig'

import authRoutes from './routes/auth.routes';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../config.env') });

const app: Express = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());


// CORS configuration
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-access-token'],
};

app.use(cors(corsOptions));

// Routes
app.use('/', authRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Catch-all route
// app.get('*', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

export default app;