const httpStatus = require('http-status');
const logger = require('../../config/logger');
const { getUserData, updateUserData } = require('../../service/users.service');

const getUserController = async (req, res) => {
  try {
    const username = req.query.name;
    const response = (await getUserData(username)) ?? { message: 'No User Found' };

    res.send({
      code: httpStatus.OK,
      response,
    });
  } catch (err) {
    logger.error(err);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      response: 'Internal Server Error',
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const query = req.body;
    const response = await updateUserData(query);

    res.send({
      code: httpStatus.OK,
      response,
    });
  } catch (err) {
    logger.error(err);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      response: 'Internal Server Error',
    });
  }
};

module.exports = {
  getUserController,
  updateUserController,
};
