const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");

router.get("/create", csrfProtection, asyncHandler(async (req, res) => {
  const countries = await db.Country.findAll();
  const tags = await db.Stamp_Tag.findAll();
  res.render("stamps-create", { tags, countries, csrfToken: req.csrfToken() });
}));

router.post("/create", csrfProtection, asyncHandler (async (req, res) => {
  // const {  }
}));

router.post("/edit")

module.exports = router;
