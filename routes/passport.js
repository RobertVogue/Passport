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

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const passport = await getUserPassports(userId);
    console.log(passport);
    res.render("passport", { passport });
  })
);

module.exports = router;
