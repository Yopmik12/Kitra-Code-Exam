const httpStatus = require('http-status');
const logger = require('../../config/logger');
const { findTreasureBoxes } = require('../../service/findTreasures.service');
const { getAllTreasuresData } = require('../../service/treasure.service');
const { convertToFloat, convertToNum } = require('../../utils/convertVariables.utils');

const treasureController = async (req, res) => {
  try {
    const query = req.query;
    const convertedQuery = {
      latitude: convertToFloat(query.latitude),
      longtitude: convertToFloat(query.longtitude),
      distance: convertToNum(query.distance),
    };

    const treasureData = await getAllTreasuresData();

    const response = await findTreasureBoxes(convertedQuery, treasureData);

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
  treasureController,
};
