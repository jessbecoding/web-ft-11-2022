'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Owners', [{
      firstName: "Jessika",
      lastName: "Adams",
      pet: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      firstName: "Stefen",
      lastName: "Adams",
      pet: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Owners', null, {});
  }
};
