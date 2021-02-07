var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require('../db/models');
const { Passport, Country } = require('../db/models')
const { topWantToVisit, topVisited, topNearBy } = require('../data-access-layer/utils')

/* GET home page. */
// router.get('/', csrfProtection, function(req, res, next) {
//   res.render('index', { csrfToken: req.csrfToken() });
// });

// Query all Countries and count 5 star ratings. Put Country as key and count as value.
// Find Top 3 countries who have the highest counts
// Take the array, if present, add 1 to the count value
// turn object into an array and sort array. Take the last 3 results and render them

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const wantToVisit = await topWantToVisit();
  const visited = await topVisited();
  const nearby = await topNearBy();
  res.render('index', { csrfToken: req.csrfToken(), wantToVisit, visited, nearby });
}));

module.exports = router;
