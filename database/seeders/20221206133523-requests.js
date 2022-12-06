'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Requests', [{
        HelperProfileId: 1,
        UserId: 1,
        message: 'Hey there!',
        createdAt: new Date(),
        updatedAt: new Date ()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requests', null, {});
    
  }
};
