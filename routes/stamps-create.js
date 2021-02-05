const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");

const validateRequiredFields = (req, res, next) => {
  const { name, passport_id, countries_id, detailed_location, detailed_description, price, tags_id } = req.body;
  const errors = [];
  if (!name) {
    errors.push("Please give an awesome name for your trip!");
  };
  if (!passport_id) {
    errors.push("Please select a trip status.");
  };
  if (!countries_id) {
    errors.push("Please select a country.");
  };
  if (!detailed_description) {
    errors.push("Please give your trip a comment or two.")
  }
  if (!detailed_location) {
    errors.push("In 50 characters or less, give your trip a more detailed location.")
  }
  if (!price) {
    errors.push("Please select how expensive the location is for travel.")
  }
  if (!tags_id) {
    errors.push("Please select a tag for your trip.")
  }
}


router.get("/create", csrfProtection, asyncHandler(async (req, res) => {
  const countries = await db.Country.findAll();
  const tags = await db.Tag.findAll();
  res.render("stamps-create", { tags, countries, csrfToken: req.csrfToken() });
}));

router.post("/create", csrfProtection, asyncHandler (async (req, res) => {
  const { name, passport_id, countries_id, detailed_location, start, end, detailed_description, price, tags_id, imgURL } = req.body
  const dates = `${start}:${end}`;
  const passportIdInt = parseInt(passport_id);
  const countriesIdInt = parseInt(countries_id);
  const tagsIdInt = parseInt(tags_id);

  console.log("req.errors---------->>>>>", req.errors);
  



  await db.Stamp.create({ name, passportIdInt, countriesIdInt, detailed_location, dates, detailed_description, price, tagsIdInt, imgURL });

  res.redirect('/profile');

  // if error
  // res.render('stamps-create', { csrfToken: req.csrfToken(), name, passportIdInt, countriesIdInt, detailed_location, dates, detailed_description, price, tagsIdInt, imgURL });
}));

router.post("/edit")

module.exports = router;
