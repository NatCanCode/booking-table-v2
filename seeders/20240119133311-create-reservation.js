'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.bulkInsert('Reservations', [{
        date: "",
        name: "Surprise dinner",
        note: "By the window please",
        status: 1,
        userId: 10,
        spotId: 7,
        roomId: 1
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Reservations', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
