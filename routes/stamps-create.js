const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");

router.get("/create", csrfProtection, asyncHandler(async (req, res) => {
  const countries = await db.Country.findAll();
  res.render("stamps-create", { countries, csrfToken: req.csrfToken() });
}));

router.post("/create", csrfProtection, asyncHandler (async (req, res) => {
  // const {  }
}));

router.post("/edit")

module.exports = router;
