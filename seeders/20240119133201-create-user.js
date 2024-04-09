'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      role: 'client',
      firstName: 'client1',
      lastName: 'isClient',
      email:'client1@gmail.com' ,
      phoneNumber:'000' ,
      password: '12345Rules*',
      createdAt: new Date(),
      updatedAt: new Date(),
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Users', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
