'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Netflix",
          age: 20,
          body: "Amediateka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          title: "Nestle",
          age: 20,
          body: "Amediateka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          title: "Netflix",
          age: 20,
          body: "Amediateka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
