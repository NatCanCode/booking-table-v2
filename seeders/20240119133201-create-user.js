'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.bulkInsert('Users', [{
      role: 'client',
      firstName: 'client1',
      lastName: 'isClient',
      email:'client1@mail.com' ,
      phoneNumber:'000' ,
      password: '12345'
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Users', null, {});
  }
};

// Then launch command:
// sequelize db:seed:all
