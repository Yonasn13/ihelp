"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Requests', [{
        HelperProfileId: 1,
        UserId: 1,
        message: 'Hello Mr.Yonas I am Ahamad. I arrived in Italy one month ago. I am from Ethiopia and I can not speak Italian. I need to get permesso di soggiorno. I would be happy if you can help me in this case. Thanks in advance.',
        createdAt: new Date(),
        updatedAt: new Date ()
      },
      {
        HelperProfileId: 2,
        UserId: 2,
        message: 'Hello I am Yusuf from..',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        HelperProfileId: 3,
        UserId: 3,
        message: 'Hello I am Eric from..',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        HelperProfileId: 4,
        UserId: 4,
        message: 'Hello I am Nour from..',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        HelperProfileId: 5,
        UserId: 5,
        message: 'Hello I am Anthony from..',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        HelperProfileId: 6,
        UserId: 6,
        message: 'Hello I am Bob from..',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Requests", null, {});
  },
};
