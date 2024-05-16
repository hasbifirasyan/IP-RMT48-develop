"use strict";
const { hashSync } = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "user1",
          email: "user1@mail.com",
          password: hashSync(`123456`, 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user2",
          email: "user2@mail.com",
          password: hashSync(`123456`, 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
