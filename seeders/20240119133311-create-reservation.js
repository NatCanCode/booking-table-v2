'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Reservations', [{
        date: new Date(),
        name: "Surprise dinner",
        note: "By the window please",
        status: 1,
        userId: 10,
        spotId: 7,
        roomId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Reservations', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
