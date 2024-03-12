const Joi = require('joi');
const commonValidation = require('./common.validation');

module.exports = {
  schema: Joi.object().keys({
    ...commonValidation,
    minPrizeValue: Joi.number().integer().min(10).optional(),
    maxPrizeValue: Joi.number()
      .integer()
      .when('minPrizeValue', {
        is: Joi.number().required(),
        then: Joi.number().integer().min(Joi.ref('minPrizeValue')).max(30).required(),
        otherwise: Joi.forbidden().error(
          new Error('maxPrizeValue is not allowed when minPrizeValue is not provided'),
        ),
      }),
  }),
};
