'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stamps', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stamps', null, {});
  }
};
