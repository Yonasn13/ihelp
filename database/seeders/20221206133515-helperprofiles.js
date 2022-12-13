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
     {
      UserId: 2,
      description: "I have helped around 10 people in the last 1 year",
      image: 'I am image 2',
      active: true,
      language: 'English',
      city: 'Rome',
      phoneNumber: '3406608100',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId:3,
      description: 'I am helper n 3',
      image: 'I am helper n 3 photo',
      active: false,
      language: 'Tigrinya',
      city: 'Bologna',
      phoneNumber: '3336608100',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId:4,
      description: 'I am helper n 4',
      image: 'I am helper n 4 image',
      active: true,
      language: 'Arabic',
      city: 'Milano',
      phoneNumber: '3346608100',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId:5,
      description: 'I am helper n 5,',
      image: 'I am helper n 5 image',
      active: false,
      language: 'Chinese',
      city: 'Torino',
      phoneNumber: '3356608100',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 6,
      description: 'I am helper n 6',
      image: 'I am helper n 6 image',
      active: false,
      language: 'French',
      city: 'Palermo',
      phoneNumber: '3366608100',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HelperProfiles', null, {});
  }
};
