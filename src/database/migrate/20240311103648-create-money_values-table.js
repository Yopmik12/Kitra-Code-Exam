module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('money_values', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      treasure_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amt: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('money_values');
  },
};
