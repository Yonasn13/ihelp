'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('HelperProfiles', [{
      UserId: 1,
      description: 'I help immigrats getting their residency permit',
      image: 'I am an image',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date ()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('HelperProfiles', null, {});
  }
};
