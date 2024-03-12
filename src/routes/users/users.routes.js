const express = require('express');
const controller = require('../users/user.controller');
const validationMiddleware = require('../../middleware/validation.middleware');
const { API_TYPE } = require('../../config/constants.config');

const router = express.Router();

router.get(
  '/user',
  (req, res, next) => {
    validationMiddleware(API_TYPE.GET_USER, req.query, res, next);
  },
  controller.getUserController,
);

router.put(
  '/user/update',
  (req, res, next) => {
    validationMiddleware(API_TYPE.UPDATE_USER, req.body, res, next);
  },
  controller.updateUserController,
);

module.exports = router;
