const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
// const { Country } = require('../db/models/country');
const db = require("../db/models");

router.get("/", asyncHandler(async (req, res) => {
  const countries = await db.Country.findAll();
  // console.log("countries-------->>", countries)
  res.render("stamps-create", { countries });
}));

// router.post("/", csrfProtection, asyncHandler (async (req, res) => {
// }));

module.exports = router;
