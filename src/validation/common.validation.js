const Joi = require('joi');

module.exports = {
  latitude: Joi.number().required(),
  longtitude: Joi.number().required(),
  distance: Joi.number().valid(1, 10).required(),
};
