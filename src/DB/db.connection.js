import { Sequelize } from "sequelize";
import dbConfig from "../Config/db.config.js";

export const sequelizeConnection = new Sequelize(dbConfig);

export const dbConnection = async () => {
  try {
    await sequelizeConnection.authenticate();
    console.log(`Connection successful`);
  } catch (error) {
    console.log(`Connection failed: ${error.message}`);
  }
};

export default {dbConnection, sequelizeConnection};