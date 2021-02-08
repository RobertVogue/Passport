"use strict",
  (module.exports = {
    up: (queryInterface, Sequelize) => {
      const randomBelow40 = () => Math.floor(Math.random() * 39) + 1;
      return queryInterface.bulkInsert(
        "Stamps",
        [
          {
            name: "trip to Hogwarts",
            detailed_location: "Scotland - Northern Ireland",
            dates: "01-05-2014:02-15-20",
            price: "$$$",
            review: "Excillent views and efficient travel",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/hogwarts_seed_img.jpg?raw=true",
            passport_id: 1,
            countries_id: 83,
            tags_id: randomBelow40(),
          },
          {
            name: "Work trip in Germany",
            detailed_location: "Frankfurt, Germany",
            dates: "09-30-12:10-12-12",
            price: "$$$",
            review:
              "Was only there for work and stayed close to the airport but enjoyed everything the hotel had to offer.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/germany_seed_img.jpg?raw=true",
            passport_id: 2,
            countries_id: 66,
            tags_id: randomBelow40(),
          },
          {
            name: "Road trip on Route 66",
            detailed_location: "Mid-West, USA",
            dates: "04-01-19:04-17-19",
            price: "$$",
            review:
              "Amazing views in some segments. Couldn't get through others quick enough.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/route_66_seed_img.jpg?raw=true",
            passport_id: 3,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Holidays in Hungary",
            detailed_location: "Hungarian Comfy Inn",
            dates: "09-21-15:11-05-15",
            price: "$$$",
            review:
              "It was greate to finally relax and disconnect from the modern world.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/hungary_seed_img.jpg?raw=true",
            passport_id: 4,
            countries_id: 77,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the coast in Italy",
            detailed_location: "",
            dates: "02-15-12:03-01-12",
            price: "$$$",
            review: "This was the trip of a lifetime.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/italy_seed_img.jpg?raw=true",
            passport_id: 1,
            countries_id: 85,
            tags_id: randomBelow40(),
          },
          {
            name: "Our trip to Iceland",
            detailed_location: "Drive to the blue lagoon",
            dates: "09-12-11:09-13-11",
            price: "$$",
            review:
              "I always enjoy this ride. Seeing the harsh landscape and silica water is amazing.",
            rating: 9,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/iceland_blue_lagoon_seed_img.jpg?raw=true",
            passport_id: 2,
            countries_id: 78,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Miami",
            detailed_location: "Beach in Miami",
            dates: "06-06-06:06-07-06",
            price: "$$",
            review: "I love our quick trips down to the beach.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/miami_seed_img.jpg?raw=true",
            passport_id: 3,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Visiting Grandparents",
            detailed_location: "Grandma's House",
            dates: "05-08-09:05-16-09",
            price: "$",
            review: "I love the approtunities we have to spend as family.",
            rating: 8,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/grandmas_seed_img.jpg?raw=true",
            passport_id: 4,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to China",
            detailed_location: "Ricepatties, Chaina",
            dates: "02-30-16:05-12-16",
            price: "$$",
            review: "This was a life changing experience",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/chaina_seed_img.jpg?raw=true",
            passport_id: 5,
            countries_id: 37,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the cost in Italy",
            detailed_location: "",
            dates: "02-15-12:03-01-12",
            price: "$$$",
            review: "This was the trip of a lifetime.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/italy_seed_img.jpg?raw=true",
            passport_id: 5,
            countries_id: 85,
            tags_id: randomBelow40(),
          },
          {
            name: "Our trip to Iceland",
            detailed_location: "Drive to the blue lagoon",
            dates: "09-12-11:09-13-11",
            price: "$$",
            review:
              "I always enjoy this ride. Seeing the harsh landscape and silica water is amazing.",
            rating: 9,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/iceland_blue_lagoon_seed_img.jpg?raw=true",
            passport_id: 4,
            countries_id: 78,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Miami",
            detailed_location: "Beach in Miami",
            dates: "06-06-06:06-07-06",
            price: "$$",
            review: "I love our quick trips down to the beach.",
            rating: 10,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/miami_seed_img.jpg?raw=true",
            passport_id: 2,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Visiting Grandparents",
            detailed_location: "Grandma's House",
            dates: "05-08-09:05-16-09",
            price: "$",
            review: "I love the approtunities we have to spend as family.",
            rating: 8,
            imgURL:
              "https://github.com/RobertVogue/Passport/blob/master/photos/grandmas_seed_img.jpg?raw=true",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },

          {
            name: "Trip to the coast",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg?raw=true",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the coast",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg?raw=true",
            passport_id: 2,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the coast",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg?raw=true",
            passport_id: 3,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the coast",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg?raw=true",
            passport_id: 4,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the coast",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg?raw=true",
            passport_id: 5,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Fiji",
            detailed_location: "on a beach somewhere...",
            dates: "12-10-10:12-31-10",
            price: "$$$",
            review: "Best way to excape the cold over Christmas!",
            rating: 10,
            imgURL:
              "https://media.timeout.com/images/105672700/image.jpg?raw=true",
            passport_id: 1,
            countries_id: 60,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Fiji",
            detailed_location: "on a beach somewhere...",
            dates: "12-10-10:12-31-10",
            price: "$$$",
            review: "Best way to excape the cold over Christmas!",
            rating: 10,
            imgURL:
              "https://media.timeout.com/images/105672700/image.jpg?raw=true",
            passport_id: 2,
            countries_id: 60,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Fiji",
            detailed_location: "on a beach somewhere...",
            dates: "12-10-10:12-31-10",
            price: "$$$",
            review: "Best way to excape the cold over Christmas!",
            rating: 10,
            imgURL:
              "https://media.timeout.com/images/105672700/image.jpg?raw=true",
            passport_id: 3,
            countries_id: 60,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Fiji",
            detailed_location: "on a beach somewhere...",
            dates: "12-10-10:12-31-10",
            price: "$$$",
            review: "Best way to excape the cold over Christmas!",
            rating: 10,
            imgURL:
              "https://media.timeout.com/images/105672700/image.jpg?raw=true",
            passport_id: 4,
            countries_id: 60,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to Fiji",
            detailed_location: "on a beach somewhere...",
            dates: "12-10-10:12-31-10",
            price: "$$$",
            review: "Best way to excape the cold over Christmas!",
            rating: 10,
            imgURL:
              "https://media.timeout.com/images/105672700/image.jpg?raw=true",
            passport_id: 5,
            countries_id: 60,
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
