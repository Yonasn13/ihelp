"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Requests', [{
        HelperProfileId: 1,
        UserId: 1,
        message: 'Hello Mr.Yonas I am Ahamad. I arrived in Italy one month ago. I am from Ethiopia and I can not speak Italian. I need to get permesso di soggiorno. I would be happy if you can help me in this case. Thanks in advance.',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date ()
      }], {});
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Requests", null, {});
  },
};
