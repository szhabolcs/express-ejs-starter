import env from "dotenv";
env.config({ path: ".env" });

import { Sequelize } from 'sequelize';

export function getClient() {
    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: process.env.DB_SEQUALIZE_DIALECT,
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            storage: "./db/database.sqlite"
        }
    );
}