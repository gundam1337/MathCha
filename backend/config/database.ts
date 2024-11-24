import * as dotenv from 'dotenv';


dotenv.config({ path: './.env.development' });


interface Config {
    port: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    connectionString: string;
}

const config: Config = {
    port: parseInt(process.env.PORT || '3001', 10),
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DATABASE: process.env.DB_DATABASE || '',
    connectionString: ''
};

// Create the connection string for PostgreSQL
config.connectionString = `postgresql://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}`;

export default config;
