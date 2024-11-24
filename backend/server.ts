import { Pool } from 'pg';
import config from './config/database';
import app from './app';
import logger from './utils/logger';
import http from 'http';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

//fixme : the .Env was deleted !


dotenv.config({ path: '.env.development' });
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const useHttps = process.env.USE_HTTPS === 'true';

const pool = new Pool({
  connectionString: config.connectionString,
});

const startServer = async (): Promise<void> => {
  try {
    await pool.query('SELECT NOW()');
    logger.info('Connected to PostgreSQL');

    let server;

    //not tested
    
    if (useHttps) {
      const privateKey = fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'), 'utf8');
      const certificate = fs.readFileSync(path.join(__dirname, 'ssl', 'server.cert'), 'utf8');
      const credentials = { key: privateKey, cert: certificate };

      server = https.createServer(credentials, app);
      logger.info('Starting server in HTTPS mode');
    } else {
      server = http.createServer(app);
      logger.info('Starting server in HTTP mode');
    }

    server.listen(config.port, () => {
      logger.info(`Server is listening at port ${config.port} (${useHttps ? 'HTTPS' : 'HTTP'})`);
    });

    const handleExit = async (signal: string): Promise<void> => {
      logger.info(
        `Received ${signal}. Closing server and database connection...`
      );
      server.close(() => {
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