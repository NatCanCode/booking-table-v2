'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [{
        name: "Green spot",
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Spots', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
