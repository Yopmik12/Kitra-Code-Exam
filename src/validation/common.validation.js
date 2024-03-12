const Joi = require('joi');

module.exports = {
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  distance: Joi.number().valid(1, 10).required(),
};
