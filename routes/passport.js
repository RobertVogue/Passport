const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");

const { requireAuth } = require("../auth.js");
const {
  get100Stamps,
  getUserPassports,
  getGoingToPassports,
  getLocalPassports,
  getVisitedPassports,
  getComments,
  getTags,
} = require("../data-access-layer/utils");
const stamp = require("../db/models/stamp");

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const passports = await getUserPassports(userId);
    res.render("passport", { passports });
  })
);

router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const passport = await getGoingToPassports(userId);
    const stamps = [];
    passport.Stamps.forEach((stamp) => {
      if (stamp.dataValues.passport_id) stamps.push(stamp.dataValues);
    });
    console.log(stamps);
    res.render("passport", { stamps });
  })
);

module.exports = router;
