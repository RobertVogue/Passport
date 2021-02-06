var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require('../db/models');
const { Passport, Country } = require('../db/models')

/* GET home page. */
// router.get('/', csrfProtection, function(req, res, next) {
//   res.render('index', { csrfToken: req.csrfToken() });
// });

// Query all Countries and count 5 star ratings. Put Country as key and count as value.
// Find Top 3 countries who have the highest counts
// Take the array, if present, add 1 to the count value
// turn object into an array and sort array. Take the last 3 results and render them

const topRatedCountries = async () => {
  const countryObj = {};
  // query Stamp include Country and rating
  const topCountries = await db.Stamp.findAll({
    where: { rating: 5 },
    include: {
      model: Country
    },
  });
  topCountries.forEach(country => {
    if (countryObj[country]) {
      countryObj[country]++;
    } else {
      countryObj[country] = 1;
    };
  });
};

topRatedCountries();

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const topCountries = await db.Stamp.findAll({
    where: { rating: 5 },
    include: [{
      model: Passport,
      where: { passport_status: "Want to visit" },
    },
    {
      model: Country
    }
    ],
  });
  const countryObj = {};

  const countryNames = topCountries.map(data => {
    return data.Country.dataValues.name
  });
  console.log(countryNames);

  countryNames.forEach(country => {
    if (countryObj[country]) {
      countryObj[country]++;
    } else {
      countryObj[country] = 1;
    };
  });

  let countriesArr = Object.entries(countryObj).sort((a,b)=> b[1] - a[1]).map(el => el[0])
  countriesArr = countriesArr.splice(0, 10)
  console.log("countriesArr------------->>>>>>", countriesArr)
  // Iterate through object
  // console.log(countryArr);
  res.render('index', { csrfToken: req.csrfToken(), countriesArr });
}));

module.exports = router;
