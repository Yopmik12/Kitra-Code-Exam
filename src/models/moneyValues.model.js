const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MoneyValues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  MoneyValues.init(
    {
      treasure_id: DataTypes.INTEGER,
      amt: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'MoneyValues',
      tableName: 'money_values',
      timestamps: false,
    },
  );
  return MoneyValues;
};
