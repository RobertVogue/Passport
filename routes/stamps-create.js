const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");

router.get("/create", csrfProtection, asyncHandler(async (req, res) => {
  const countries = await db.Country.findAll();
  const tags = await db.Tag.findAll();
  res.render("stamps-create", { tags, countries, csrfToken: req.csrfToken() });
}));

router.post("/create", csrfProtection, asyncHandler (async (req, res) => {
  const { name, passport_id, countries_id, detailed_location, start, end, detailed_description, price, tags_id, imgURL } = req.body
  //take start and end off of req.body and concat on ":"
  const dates = `${start}:${end}`;
  const passportIdInt = parseInt(passport_id);
  const countriesIdInt = parseInt(countries_id);
  const tagsIdInt = parseInt(tags_id);

  console.log("countries_id---------->>>>>", req.body);
  // await db.Stamp.create({ name, passportIdInt, countriesIdInt, detailed_location, dates, detailed_description, price, tagsIdInt, imgURL });

  res.redirect('/stamps/create');

  // if error
  // res.render('stamps-create', { csrfToken: req.csrfToken(), name, passportIdInt, countriesIdInt, detailed_location, dates, detailed_description, price, tagsIdInt, imgURL });
}));

router.post("/edit")

module.exports = router;
