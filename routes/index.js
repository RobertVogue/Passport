var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require('../db/models');
const { Passport, Country } = require('../db/models')

/* GET home page. */
// router.get('/', csrfProtection, function(req, res, next) {
//   res.render('index', { csrfToken: req.csrfToken() });
// });

// Query all Countries and count ratings. Put Country as key and count as value.
// Find Top 3 countries who have the highest counts

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const topTags = await db.Stamp.findAll({
    where: { rating: 5 },
    include: [{
      model: Passport,
      where: { passport_status: "Want to visit" },
    },
    {
      model: Country
    }
  ],
    limit: 10
  });
  console.log("topTags------>", topTags[0])
  res.render('index', { csrfToken: req.csrfToken(), topTags })
}))

module.exports = router;
