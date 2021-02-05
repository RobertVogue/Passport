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
  console.log("req.body------>>", req.body)
  //take start and end off of req.body and concat on ":"
  //query for country --> name
  //query for tag --> name
  //query for status --> passport_status
  // const { name, passport_id, countries_id, detailed_location, dates, detailed_description, price, tags_id } = req.body;
  // await db.Stamp.create({ status, countries, detailed_location, start, end, detailed_description, tag });

  res.redirect('/stamps/create');
}));

router.post("/edit")

module.exports = router;
