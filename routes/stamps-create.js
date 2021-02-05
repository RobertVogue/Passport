const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");
const { check, validationResult } = require('express-validator');

const stampFormValidators = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please give an awesome name for your trip!")
    .isLength({ max: 20 })
    .withMessage("Too long! Should be 20 characters or less."),
  check("passport_id")
    .exists({ checkFalsy: true })
    .withMessage("Please select a trip status."),
  check("countries_id")
    .exists({ checkFalsy: true })
    .withMessage("Please select a country."),
];

router.get("/create", csrfProtection, asyncHandler(async (req, res) => {
  const countries = await db.Country.findAll();
  const tags = await db.Tag.findAll();
  const passports = await db.Passport.findAll({where: { user_id: req.session.auth.userId } });
  res.render("stamps-create", { passports, tags, countries, csrfToken: req.csrfToken() });
}));

router.post("/create", csrfProtection, stampFormValidators, asyncHandler(async (req, res) => {
  const { name, passport_id, countries_id, detailed_location, start, end, review, price, tags_id, rating, imgURL } = req.body
  
  const dates = `${start}:${end}`;
  const passportIdInt = parseInt(passport_id); /////double check this
  const countriesIdInt = parseInt(countries_id);
  const tagsIdInt = parseInt(tags_id);
  //for passport status I need to do a query to access it through the Stamps table
  
  const newStamp = await db.Stamp.build({ name, passport_id: passportIdInt, countries_id: countriesIdInt, detailed_location, dates, review, rating, price, tags_id: tagsIdInt, imgURL });

  const validationErrors = validationResult(req); //if there are any messages from stampFormValidators, this will put the messages in an object
  if (validationErrors.isEmpty()) {
    await newStamp.save();
    res.redirect('/');
  } else {
    const countries = await db.Country.findAll();
    const tags = await db.Tag.findAll();
    const passports = await db.Passport.findAll({where: { user_id: req.session.auth.userId } });
    const errors = validationErrors.array().map(error => error.msg); //this grabs the specific message of each error and puts it into an array
    res.render('stamps-create', { csrfToken: req.csrfToken(), errors, countries, tags, passports })
  }

}));

router.post("/edit")

module.exports = router;
