module.exports = {
  async up(queryInterface) {
    const data = [
      { id: 100, latitude: 14.54376481, longtitude: 121.0199117, name: 'T1' },
      { id: 101, latitude: 14.55320766, longtitude: 121.0557745, name: 'T2' },
      { id: 102, latitude: 14.54464357, longtitude: 121.0203656, name: 'T3' },
      { id: 103, latitude: 14.58726159, longtitude: 120.9795048, name: 'T4' },
      { id: 104, latitude: 14.57320327, longtitude: 121.0230904, name: 'T5' },
      { id: 105, latitude: 14.52311313, longtitude: 121.0194573, name: 'T6' },
      { id: 106, latitude: 14.60242292, longtitude: 121.0115134, name: 'T7' },
      { id: 107, latitude: 14.60857463, longtitude: 121.0185514, name: 'T8' },
      { id: 108, latitude: 14.49111434, longtitude: 121.0437482, name: 'T9' },
      { id: 109, latitude: 14.54455953, longtitude: 121.1060883, name: 'T10' },
      { id: 110, latitude: 14.58798141, longtitude: 121.058208, name: 'T11' },
      { id: 111, latitude: 14.54886493, longtitude: 121.0336393, name: 'T12' },
      { id: 112, latitude: 14.53715059, longtitude: 120.9904302, name: 'T13' },
      { id: 113, latitude: 14.52579666, longtitude: 121.0208688, name: 'T14' },
      { id: 114, latitude: 14.51709988, longtitude: 120.9810021, name: 'T15' },
      { id: 115, latitude: 14.50200687, longtitude: 120.9916181, name: 'T16' },
      { id: 116, latitude: 14.52112441, longtitude: 121.0427714, name: 'T17' },
      { id: 117, latitude: 14.47720766, longtitude: 120.9867927, name: 'T18' },
    ];

    await queryInterface.bulkInsert('treasures', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('treasures', null, {});
  },
};
