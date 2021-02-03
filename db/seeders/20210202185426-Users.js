"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faker = require("faker");
    const hashedDemoPassword = await bcrypt.hash(`demopassword`, 8);
    const usersArray = [
      {
        username: "Demo",
        displayName: "Demo",
        email: "demo@demo.com",
        hashedPassword: hashedDemoPassword,
      },
    ];
    for (let i = 2; i < 6; i++) {
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
