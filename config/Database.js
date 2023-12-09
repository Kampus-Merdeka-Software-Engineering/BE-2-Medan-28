import { Sequelize } from "sequelize";
import 'dotenv/config';

const dbConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT
});

export default dbConnection;
