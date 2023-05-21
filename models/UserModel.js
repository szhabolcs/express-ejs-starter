import { DataTypes } from "sequelize";
import { getClient } from "../db/config.js";
import logger from "../utils/logging.js";

const sequelize = getClient();
const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, { "tableName": "User" });

await User.sync();

async function tableExists() {
    const tableNames = await sequelize.getQueryInterface().showAllTables();
    logger.debug(tableNames);
    
    return tableNames.includes('User');
}

export default {
    tableExists
}