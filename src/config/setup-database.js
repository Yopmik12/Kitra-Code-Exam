const { Sequelize } = require('sequelize');
const logger = require('./logger');
const env = process.env.NODE_ENV || 'development';
const config = require('../database/config/config.json')[env];

async function createDatabase() {
  const sequelize = new Sequelize('', config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
  });

  try {
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${config.database};`);
    logger.info('Database created successfully');
  } catch (error) {
    logger.error('Error creating database:', error);
  } finally {
    await sequelize.close();
  }
}

createDatabase();
