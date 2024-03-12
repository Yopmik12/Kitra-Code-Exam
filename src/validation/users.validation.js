const Joi = require('joi');

const getUserValidation = {
  schema: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const updateUserValidation = {
  schema: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().optional(),
    password: Joi.string().optional(),
    email: Joi.string().email().optional(),
  }),
  location: 'body',
};

module.exports = {
  getUserValidation,
  updateUserValidation,
};
