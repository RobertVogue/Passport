"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faker = require("faker");
    const hashedPassword = await bcrypt.hash("password", 8);
    const usersArray = [];
    for (let i = 0; i < 6; i++) {
      let fakeUser = {
        username: faker.internet.userName(),
        displayName: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword,
      };
      usersArray.push(fakeUser);
    }
    return queryInterface.bulkInsert("Users", fakeUser);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
  },
};
