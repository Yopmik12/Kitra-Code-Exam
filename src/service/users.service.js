const bcrypt = require('bcryptjs');
const logger = require('../config/logger');
const { Users } = require('../models');

const getUserData = async (name) => {
  try {
    return Users.findOne({
      where: {
        name,
      },
    });
  } catch (err) {
    logger.error(err);
    throw new Error('Internal Server Error');
  }
};

const updateUserData = async (obj) => {
  try {
    const user = await getUserData(obj.name);

    if (!user) {
      return { message: 'No User Found!' };
    }

    if (obj.password) {
      obj.password = await bcrypt.hash(obj.password, 10);
    }

    const updatedUser = await user.update(obj);

    return updatedUser;
  } catch (err) {
    logger.error(err);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getUserData,
  updateUserData,
};
