"use strict",
  (module.exports = {
    up: (queryInterface, Sequelize) => {
      const randomBelow40 = () => Math.floor(Math.random() * 40);
      return queryInterface.bulkInsert(
        "Stamps",
        [
          {
            name: "trip to Hogwarts",
            detailed_location: "Scotland - Northern Ireland",
            dates: "01-05-2014:02-03-2014",
            price: "$$$",
            review: "Excillent views and efficient travel",
            rating: 8,
            imgURL:
              "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            passport_id: 1,
            countries_id: 83,
            tags_id: randomBelow40(),
          },
          {
            name: "trip to the Vinyard",
            detailed_location: "Sanoma, California",
            dates: "02-04-2014:02-07-14",
            price: "$$$",
            review: "The wine was great. Never felt more bubbly...",
            rating: 8,
            imgURL:
              "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/06/Corton-alamy-CY5ECX-min-920x609.jpg",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "trip to the beach",
            detailed_location: "Waikiki, Hawaii",
            dates: "01-04-2013:02-07-13",
            price: "$$$",
            review: "The wine was great. Never felt more bubbly...",
            rating: 8,
            imgURL:
              "https://www.oahuislandprivatetours.com/wp-content/uploads/2019/10/Diamond-Head-Hike-Tour.jpg",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "trip to the Amusement Park",
            detailed_location: "Disney Land",
            dates: "03-04-2019:03-07-19",
            price: "$$$",
            review: "So much fun with the kids",
            rating: 8,
            imgURL:
              "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sleeping_Beauty_Castle_2019.jpg",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
        ],
        {}
      );
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Stamps", null, {});
    },
  });
