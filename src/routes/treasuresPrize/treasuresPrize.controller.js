const httpStatus = require('http-status');
const logger = require('../../config/logger');
const { getAllTreasuresData } = require('../../service/treasure.service');
const { convertToFloat, convertToNum } = require('../../utils/convertVariables.utils');
const {
  findTreasureBoxesWithPrize,
  findTreasureBoxes,
} = require('../../service/findTreasures.service');

const treasurePrizeController = async (req, res) => {
  try {
    const query = req.query;
    const convertedQuery = {
      latitude: convertToFloat(query.latitude),
      longitude: convertToFloat(query.longitude),
      distance: convertToNum(query.distance),
      minPrizeValue: convertToNum(query.minPrizeValue) || null,
      maxPrizeValue: convertToNum(query.maxPrizeValue) || null,
    };

    const treasurePrizeData = await getAllTreasuresData();

    let response;

    if (convertedQuery.minPrizeValue) {
      response = await findTreasureBoxesWithPrize(convertedQuery, treasurePrizeData);
    } else {
      response = await findTreasureBoxes(convertedQuery, treasurePrizeData);
    }

    res.send({
      code: httpStatus.OK,
      response,
    });
  } catch (err) {
    logger.error(err);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      response: 'Internal Server Error',
    });
  }
};

module.exports = {
  treasurePrizeController,
};
