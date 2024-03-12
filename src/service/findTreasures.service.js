const { calculateDistance } = require('./calcucateDistance.service');

const findTreasureBoxes = (queryObj, treasures) => {
  return treasures.filter((treasure) => {
    const treasureDistance = calculateDistance(
      queryObj.latitude,
      queryObj.longitude,
      treasure.latitude,
      treasure.longitude,
    );

    return treasureDistance <= queryObj.distance;
  });
};

const findTreasureBoxesWithPrize = async (queryObj, treasures) => {
  const filteredTreasures = findTreasureBoxes(queryObj, treasures)
    .filter((treasure) => {
      const minTreasurePrize = Math.min(...(treasure.amt ?? []));
      return (
        minTreasurePrize >= queryObj.minPrizeValue && minTreasurePrize <= queryObj.maxPrizeValue
      );
    })
    .map((treasure) => ({
      ...treasure,
      amt: Math.min(...treasure.amt),
    }));

  return filteredTreasures.length ? filteredTreasures : 'No Treasure Found';
};

module.exports = {
  findTreasureBoxes,
  findTreasureBoxesWithPrize,
};
