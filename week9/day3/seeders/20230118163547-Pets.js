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
   await queryInterface.bulkInsert('Pets', [{
    name: "Bueller",
    type: "Ferret",
    age: "9 years old",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Leia",
    type: "Chihuahua",
    age: "9 years old",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Gimpy",
    type: "Cat",
    age: "15 years old",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Lucipurr",
    type: "Cat",
    age: "5 years old",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Millie",
    type: "Terrier Mix",
    age: "4 months old",
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
    await queryInterface.bulkDelete('Pets', null, {});
  }
};
