const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    const data = [
      {
        id: 3000,
        name: 'U1',
        age: 21,
        password: await bcrypt.hash('123123', 10),
        email: 'u1@kitra.abc',
      },
      {
        id: 3001,
        name: 'U2',
        age: 51,
        password: await bcrypt.hash('234234', 10),
        email: 'u2@kitra.abc',
      },
      {
        id: 3002,
        name: 'U3',
        age: 31,
        password: await bcrypt.hash('345345', 10),
        email: 'u3@kitra.abc',
      },
      {
        id: 3003,
        name: 'U4',
        age: 18,
        password: await bcrypt.hash('456456', 10),
        email: 'u4@kitra.abc',
      },
      {
        id: 3004,
        name: 'U5',
        age: 21,
        password: await bcrypt.hash('567567', 10),
        email: 'u5@kitra.abc',
      },
      {
        id: 3005,
        name: 'U6',
        age: 35,
        password: await bcrypt.hash('678678', 10),
        email: 'u6@kitra.abc',
      },
    ];

    await queryInterface.bulkInsert('users', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
