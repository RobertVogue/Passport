"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Passports",
      [
        {
          user_id: 1,
          passport_status: "Visited",
        },
        {
          user_id: 1,
          passport_status: "Want to visit",
        },
        {
          user_id: 1,
          passport_status: "Near By",
        },
        {
          user_id: 2,
          passport_status: "Visited",
        },
        {
          user_id: 2,
          passport_status: "Want to visit",
        },
        {
          user_id: 2,
          passport_status: "Near By",
        },
        {
          user_id: 3,
          passport_status: "Visited",
        },
        {
          user_id: 3,
          passport_status: "Want to visit",
        },
        {
          user_id: 3,
          passport_status: "Near By",
        },
        {
          user_id: 4,
          passport_status: "Visited",
        },
        {
          user_id: 4,
          passport_status: "Want to visit",
        },
        {
          user_id: 4,
          passport_status: "Near By",
        },
        {
          user_id: 5,
          passport_status: "Visited",
        },
        {
          user_id: 5,
          passport_status: "Want to visit",
        },
        {
          user_id: 5,
          passport_status: "Near By",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Passports");
  },
};
