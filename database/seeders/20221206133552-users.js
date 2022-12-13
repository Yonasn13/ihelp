'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

       await queryInterface.bulkInsert('Users', [{
         firstName: 'Adela',
         lastName: 'Yari',
         email: 'AdelaYari1@gmail.com',
         createdAt: new Date(),
         updatedAt: new Date ()
       },
       {
        firstName: 'Lucas',
        lastName: 'Totti',
        email: 'Lucas13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Mebrahtom',
        lastName: 'Goytom',
        email: 'Mebre13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Yusuf',
        lastName: 'Nur',
        email: 'yusufNur13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Anthony',
        lastName: 'Quee',
        email: 'yusufNur13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Tomas',
        lastName: 'Totti',
        email: 'Tommy13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Mouslim',
        lastName: 'Tous',
        email: 'MouslimT13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
     
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('Users', null, {});
       
  }
};
