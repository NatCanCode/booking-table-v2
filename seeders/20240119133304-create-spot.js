'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.bulkInsert('Spots', [{
        name: "Green spot",
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Spots', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
