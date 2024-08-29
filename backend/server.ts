import { Pool } from 'pg';
import config from './config/database';
import app from './app';
import logger from './utils/logger';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const pool = new Pool({
  connectionString: config.connectionString,
});

const startServer = async (): Promise<void> => {
  try {
    // Test database connection
    await pool.query('SELECT NOW()');
    logger.info('Connected to PostgreSQL');

    // Create HTTP server from the Express app
    const httpServer = http.createServer(app);

    // Listen on the created HTTP server
    httpServer.listen(config.port, () => {
      logger.info(`Server is listening at port ${config.port}`);
    });

    // Graceful shutdown logic
    const handleExit = async (signal: string): Promise<void> => {
      logger.info(
        `Received ${signal}. Closing server and database connection...`
      );
      httpServer.close(() => {
        logger.info('Server closed');
        pool.end().then(() => {
          logger.info('Database connection closed');
          process.exit(0);
        });
      });
    };

    process.on('SIGINT', () => handleExit('SIGINT'));
    process.on('SIGTERM', () => handleExit('SIGTERM'));
    process.on('SIGQUIT', () => handleExit('SIGQUIT'));
  } catch (err) {
    logger.error('Error connecting to the database', err);
    process.exit(1);
  }
};

startServer();