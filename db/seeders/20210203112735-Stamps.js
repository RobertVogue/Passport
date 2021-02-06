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
            rating: 8,
            imgURL:
              "https://pixabay.com/get/g5cb016d69e9d7c50a9859e3088d195868cd8e4a6e88c3d789c8819294625dd507a740660ec3e05434f2d7af6501af367d69af3edcb71f4808d9b961a9768e70a_640.jpg",
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
            rating: 9,
            imgURL:
              "https://pixabay.com/get/g8c2a4fcac4a20a766926009ab80edf562ee0f97fc9d5d72b4983f1db9e8e76fe68aa905d8398f9a5c44c883da851262047131e1797cf46d03ff0e3d7b39b44a3_640.jpg",
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
            rating: 7,
            imgURL:
              "https://pixabay.com/get/gea27f1542580fc16c0a7edf29411e6b88350944143dde284016a74f419354ea24ecfe90e9eeadfeb6079d85215a7b17ba3f44166e5f408c691c58fcf24c39244_640.jpg",
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
              "https://pixabay.com/get/gfd60aab876d25810c694114815019748e979f70ab75f967d8b201be1b5ed2238389de1e65f0be018e62a3ca704f5b9012fa4c3805003e0666511a3f8dd38b925_640.jpg",
            passport_id: 4,
            countries_id: 77,
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
              "https://pixabay.com/photos/village-sea-coast-coastline-279013/",
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
              "https://pixabay.com/get/g784b96129eaa37811de2ce688eae4b9daddab20373630636d1432dacbf0184067d0523c4b825ab448536d0aaed7d0158953477a9839ab50ab27b7e6dd85bdbac_640.jpg",
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
              "https://pixabay.com/photos/drink-cocktail-beach-beverage-84533/",
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
              "https://pixabay.com/get/gc72b7ed40a6b77efcdbf575a3803f55980604c8c4820a5d4cc4992e57974f295b3dd9b35408a46a619fce93ca26b8415621d45b5517f890224c4543f7ca14f4e_640.jpg",
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
              "https://pixabay.com/get/g80e7c691411a67e76b8d813d1d1a2fe793bfbe0a6157b676b5aa998df0bb8796d2dcc6800928ecc515e7dd6f15a56b7edfcd1c360011c5a74ec38612bdad5c22_640.jpg",
            passport_id: 5,
            countries_id: 37,
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
              "https://pixabay.com/get/g80e7c691411a67e76b8d813d1d1a2fe793bfbe0a6157b676b5aa998df0bb8796d2dcc6800928ecc515e7dd6f15a56b7edfcd1c360011c5a74ec38612bdad5c22_640.jpg",
            passport_id: 3,
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
              "https://pixabay.com/photos/village-sea-coast-coastline-279013/",
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
              "https://pixabay.com/get/g784b96129eaa37811de2ce688eae4b9daddab20373630636d1432dacbf0184067d0523c4b825ab448536d0aaed7d0158953477a9839ab50ab27b7e6dd85bdbac_640.jpg",
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
              "https://pixabay.com/photos/drink-cocktail-beach-beverage-84533/",
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
              "https://pixabay.com/get/gc72b7ed40a6b77efcdbf575a3803f55980604c8c4820a5d4cc4992e57974f295b3dd9b35408a46a619fce93ca26b8415621d45b5517f890224c4543f7ca14f4e_640.jpg",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },

          {
            name: "Trip to the cost",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg",
            passport_id: 1,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the cost",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg",
            passport_id: 2,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the cost",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg",
            passport_id: 3,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the cost",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg",
            passport_id: 4,
            countries_id: 185,
            tags_id: randomBelow40(),
          },
          {
            name: "Trip to the cost",
            detailed_location: "PCH",
            dates: "02-30-10:03-12-10",
            price: "$$",
            review:
              "This was an amazing drive. We covered three states and many changes in climate",
            rating: 9,
            imgURL:
              "https://www.nationalgeographic.com/content/dam/travel/2019-digital/best-travel-photos-2019/33-best-travel-photos-2019190916-32.jpg",
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
            imgURL: "https://media.timeout.com/images/105672700/image.jpg",
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
            imgURL: "https://media.timeout.com/images/105672700/image.jpg",
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
            imgURL: "https://media.timeout.com/images/105672700/image.jpg",
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
            imgURL: "https://media.timeout.com/images/105672700/image.jpg",
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
            imgURL: "https://media.timeout.com/images/105672700/image.jpg",
            passport_id: 5,
            countries_id: 60,
            tags_id: randomBelow40(),
          },

          {
            name: "Swimming in Mexico",
            detailed_location: "Chichen Itza, Yucatan, Mexico",
            dates: "01-25-08:02-10-08",
            price: "$$",
            review:
              "This was an amzing experience. The water was warm and clear. The people and food was amazing.",
            rating: 10,
            imgURL:
              "https://twitter.com/travel/status/827005215140376576/photo/1",
            passport_id: 1,
            countries_id: 112,
            tags_id: randomBelow40(),
          },
          {
            name: "Swimming in Mexico",
            detailed_location: "Chichen Itza, Yucatan, Mexico",
            dates: "01-25-08:02-10-08",
            price: "$$",
            review:
              "This was an amzing experience. The water was warm and clear. The people and food was amazing.",
            rating: 10,
            imgURL:
              "https://twitter.com/travel/status/827005215140376576/photo/1",
            passport_id: 2,
            countries_id: 112,
            tags_id: randomBelow40(),
          },
          {
            name: "Swimming in Mexico",
            detailed_location: "Chichen Itza, Yucatan, Mexico",
            dates: "01-25-08:02-10-08",
            price: "$$",
            review:
              "This was an amzing experience. The water was warm and clear. The people and food was amazing.",
            rating: 10,
            imgURL:
              "https://twitter.com/travel/status/827005215140376576/photo/1",
            passport_id: 3,
            countries_id: 112,
            tags_id: randomBelow40(),
          },
          {
            name: "Swimming in Mexico",
            detailed_location: "Chichen Itza, Yucatan, Mexico",
            dates: "01-25-08:02-10-08",
            price: "$$",
            review:
              "This was an amzing experience. The water was warm and clear. The people and food was amazing.",
            rating: 10,
            imgURL:
              "https://twitter.com/travel/status/827005215140376576/photo/1",
            passport_id: 4,
            countries_id: 112,
            tags_id: randomBelow40(),
          },
          {
            name: "Swimming in Mexico",
            detailed_location: "Chichen Itza, Yucatan, Mexico",
            dates: "01-25-08:02-10-08",
            price: "$$",
            review:
              "This was an amzing experience. The water was warm and clear. The people and food was amazing.",
            rating: 10,
            imgURL:
              "https://twitter.com/travel/status/827005215140376576/photo/1",
            passport_id: 5,
            countries_id: 112,
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
