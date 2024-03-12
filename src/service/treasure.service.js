const logger = require('../config/logger');
const { sequelize } = require('../models');

const getAllTreasuresData = async () => {
  try {
    const query = `
      SELECT treasures.id, treasures.latitude, treasures.longtitude, treasures.name, GROUP_CONCAT(money_values.amt) AS amt
      FROM treasures
      INNER JOIN money_values ON treasures.id = money_values.treasure_id
      GROUP BY treasures.id;
    `;
    const treasuresWithAmounts = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });

    treasuresWithAmounts.forEach((treasure) => {
      if (treasure.amt) {
        treasure.amt = treasure.amt.split(',').map(Number);
      } else {
        treasure.amt = [];
      }
    });

    return treasuresWithAmounts;
  } catch (err) {
    logger.error(err);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getAllTreasuresData,
};
