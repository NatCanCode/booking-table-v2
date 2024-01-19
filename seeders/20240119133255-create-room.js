'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.bulkInsert('Rooms', [{
        name: "White room",
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Rooms', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
