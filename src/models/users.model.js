const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Users.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'users',
      timestamps: false,
    },
  );
  return Users;
};
