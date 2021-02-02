'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stamps_Tags', [{name:"Family Friendly"},
      {name:"Nightlife"},
      {name:"Couples"},
      {name:"Singles"},
      {name:"Kid friendly"},
      {name:"Tropical"},
      {name:"Good for Holidays"},
      {name:"Winter Wonderland"},
      {name:"Amusement Parks"},
      {name:"Great for Foodies"},
      {name:"Great for surfing"},
      {name:"Great for snowboarding"},
      {name:"All inclusive"},
      {name:"Good for Trekers"},
      {name:"Good year round"},
      {name:"Amazing views"},
      {name:"Culture"},
      {name:"History"},
      {name:"luxary"},
      {name:"Seafood"},
      {name:"Live Events"},
      {name:"Easy transportation"},
      {name:"remote"},
      {name:"busy"},
      {name:"loud"},
      {name:"Great"},
      {name:"Alright"},
      {name:"Friendly environment"},
      {name:"Speaks English"},
      {name:"Speaks Spanish"},
      {name:"Speaks French"},
      {name:"Speaks German"},
      {name:"Speaks British"},
      {name:"Speaks Portegues"},
      {name:"Speaks Chainese"},
      {name:"Speaks Japanese"},
      {name:"Never again"},
      {name:"Will be back"},
      {name:"Weekend getaway"},
      {name:"Staycation"}]);

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stamps_Tags', null, {});
  }
};
