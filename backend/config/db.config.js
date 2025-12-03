// backend/config/db.config.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',          // Sử dụng MySQL
        logging: false
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection to MySQL has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
    }
};

module.exports = { sequelize, connectDB };