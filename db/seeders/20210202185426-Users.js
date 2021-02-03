"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faker = require("faker");
    const usersArray = [];
    for (let i = 1; i < 6; i++) {
      const hashedPassword = await bcrypt.hash(`password${i}`, 8);
      let fakeUser = {
        username: faker.internet.userName(),
        displayName: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword,
      };
      usersArray.push(fakeUser);
    }
    return queryInterface.bulkInsert("Users", usersArray);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
  },
};
