const Joi = require('joi');
const commonValidation = require('./common.validation');

module.exports = {
  schema: Joi.object().keys({
    ...commonValidation,
  }),
};
