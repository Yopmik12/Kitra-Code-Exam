const httpStatus = require('http-status');
const treasuresValidation = require('../validation/treasure.validation');
const treasuresPrize = require('../validation/treasurePrize.validation');
const userValidation = require('../validation/users.validation');
const { API_TYPE } = require('../config/constants.config');

const schemaValidatorsByType = (apiType) => {
  switch (apiType) {
    case API_TYPE.TREASURE:
      return treasuresValidation;
    case API_TYPE.TREASURE_PRIZE:
      return treasuresPrize;
    case API_TYPE.GET_USER:
      return userValidation.getUserValidation;
    default:
      return userValidation.updateUserValidation;
  }
};

const validateRequestParameter = async (apiType, data, res, next) => {
  const { error } = schemaValidatorsByType(apiType).schema.validate(data, {
    allowUnknown: false,
  });

  if (error) {
    return res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      response: error.message,
    });
  }

  next();
};

module.exports = validateRequestParameter;
