const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { Country } = require('../db/models/country');

router.get("/", (req, res) => {
  const countries = await Country.findAll()
  res.render("stamps-create", { countries });
});

// router.post("/", csrfProtection, asyncHandler (async (req, res) => {
// }));

module.exports = router;
