const express = require('express');
const treasuresRoutes = require('./treasures/treasures.routes');
const treasuresPrizeRoutes = require('./treasuresPrize/treasuresPrize.routes');
const userRoutes = require('./users/users.routes');

const router = express.Router();

const defaultRoutes = [treasuresRoutes, treasuresPrizeRoutes, userRoutes];

defaultRoutes.forEach((route) => router.use(route));

module.exports = router;
