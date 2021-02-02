'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stamps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      detailed_location: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      passport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { Model: "Passports" }
      },
      countries_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { Model: "Countries" }
      },
      tags_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { Model: "Stamp_tags" }
      },
      dates: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING(3)
      },
      review: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Stamps');
  }
};
