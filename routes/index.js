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
  const topCountriesV = await db.Stamp.findAll({
    where: { rating: 5 },
    include: [{
      model: Passport,
      where: { passport_status: "Visited" },
    },
    {
      model: Country
    }
    ],
  });
  const topCountriesW = await db.Stamp.findAll({
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
  const topCountriesN = await db.Stamp.findAll({
    where: { rating: 5 },
    include: [{
      model: Passport,
      where: { passport_status: "Near By" },
    },
    {
      model: Country
    }
    ],
  });
  const countryObjV = {};
  const countryObjW = {};
  const countryObjN = {};

  const countryNamesV = topCountriesV.map(data => {
    return data.Country.dataValues.name
  });
  console.log(countryNamesV);

  countryNamesV.forEach(country => {
    if (countryObjV[country]) {
      countryObjV[country]++;
    } else {
      countryObjV[country] = 1;
    };
  });
  
  const countryNamesW = topCountriesW.map(data => {
    return data.Country.dataValues.name
  });
  console.log(countryNamesW);

  countryNamesW.forEach(country => {
    if (countryObjW[country]) {
      countryObjW[country]++;
    } else {
      countryObjW[country] = 1;
    };
  });

  const countryNamesN = topCountriesN.map(data => {
    return data.Country.dataValues.name
  });
  console.log(countryNamesN);

  countryNamesN.forEach(country => {
    if (countryObjN[country]) {
      countryObjN[country]++;
    } else {
      countryObjN[country] = 1;
    };
  });

  let countriesArrW = Object.entries(countryObjW).sort((a,b)=> b[1] - a[1]).map(el => el[0])
  countriesArrW = countriesArrW.splice(0, 10)
  console.log("countriesArrW------------->>>>>>", countriesArrW)

  let countriesArrV = Object.entries(countryObjV).sort((a,b)=> b[1] - a[1]).map(el => el[0])
  countriesArrV = countriesArrV.splice(0, 10)
  console.log("countriesArrV------------->>>>>>", countriesArrV)

  let countriesArrN = Object.entries(countryObjN).sort((a,b)=> b[1] - a[1]).map(el => el[0])
  countriesArrN = countriesArrN.splice(0, 10)
  console.log("countriesArrN------------->>>>>>", countriesArrN)

  // Iterate through object
  // console.log(countryArr);
  res.render('index', { csrfToken: req.csrfToken(), countriesArrW, countriesArrV, countriesArrN });
}));

module.exports = router;
