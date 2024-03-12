const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Treasures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Treasures.init(
    {
      latitude: DataTypes.DECIMAL(10, 8),
      longtitude: DataTypes.DECIMAL(10, 8),
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Treasures',
      tableName: 'treasures',
      timestamps: false,
    },
  );
  return Treasures;
};
