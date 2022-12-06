'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

       await queryInterface.bulkInsert('Users', [{
         firstName: 'Adela',
         lastName: 'Yari',
         language: 'Persian',
         city: 'Torino',
         email: 'AdelaYari1@gmail.com',
         phoneNumber: '3476608100',
         createdAt: new Date(),
         updatedAt: new Date ()
       }], {});
     
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('Users', null, {});
       
  }
};
