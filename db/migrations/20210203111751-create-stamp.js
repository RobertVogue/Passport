"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Stamps",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        detailed_location: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        passport_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Passports" },
        },
        countries_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Countries" },
        },
        tags_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Tags" },
        },
        dates: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        price: {
          allowNull: true,
          type: Sequelize.STRING(3),
        },
        review: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        rating: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("now"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("now"),
        },
        imgURL: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Stamps", null, {});
  },
};
