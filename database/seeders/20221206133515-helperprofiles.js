'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('HelperProfiles', [{
      UserId: 1,
      description: 'I help immigrats getting their residency permit',
      image: 'I am an image',
      active: true,
      language: 'Persian',
      city: 'Torino',
      phoneNumber: '3476608100',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {UserId: 2,
     description: "I have helped around 10 people in the last 1 year",
     image: 'I am image 2',
     active: true,
     language: 'English',
     city: 'Rome',
     phoneNumber: '3406608100',
     createdAt: new Date(),
     updatedAt: new Date()
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HelperProfiles', null, {});
  }
};
