const express = require('express');
const controller = require('../treasures/treasures.controller');
const validationMiddleware = require('../../middleware/validation.middleware');
const { API_TYPE } = require('../../config/constants.config');

const router = express.Router();

router.get(
  '/treasures',
  (req, res, next) => {
    validationMiddleware(API_TYPE.TREASURE, req.query, res, next);
  },
  controller.treasureController,
);

module.exports = router;
