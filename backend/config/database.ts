import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, "../config.env") });

interface Config {
    port: number;
    // Uncomment the next line if you're using JWT authentication
    // jwtSecret: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    connectionString: string;
}

const config: Config = {
    port: parseInt(process.env.PORT || '3001', 10),
    // Uncomment the next line if you're using JWT authentication
    // jwtSecret: process.env.JWT_SECRET || 'A very long secret key',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DATABASE: process.env.DB_DATABASE || '',
    connectionString: ''
};

// Create the connection string for PostgreSQL
config.connectionString = `postgresql://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}`;

// console.log(config);

export default config;