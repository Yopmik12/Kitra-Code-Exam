const express = require('express');
const controller = require('../treasuresPrize/treasuresPrize.controller');
const validationMiddleware = require('../../middleware/validation.middleware');
const { API_TYPE } = require('../../config/constants.config');

const router = express.Router();

router.get(
  '/treasures/prize',
  (req, res, next) => {
    validationMiddleware(API_TYPE.TREASURE_PRIZE, req.query, res, next);
  },
  controller.treasurePrizeController,
);

module.exports = router;
