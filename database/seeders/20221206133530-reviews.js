'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Reviews', [{
        RequestId: 1,
        description: 'Hey there!',
        title: 'Permesso di soggiorno',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date ()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('Reviews', null, {});
       
  }
};
