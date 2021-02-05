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
} = require("../data-access-layer/utils");

router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const userid = req.params.id;
    const passports = await getUserPassports(userid);
    const passportGoingTo = await getGoingToPassports(userid);
    const passportVisited = await getVisitedPassports(userid);
    const passportLocal = await getLocalPassports(userid);
    const stamps = await get100Stamps(userid);
    const images = stamps.map((stamp) => stamp.imgURL);
    const stampIds = stamps.map((stamp) => stamp.id);
    const names = stamps.map((stamp) => stamp.name);
    const obj = {};
    images.forEach((cur, index) => {
      obj[cur] = names[index];
    });

    console.log(obj);
    res.render("profile", {
      obj,
      passports,
      passportGoingTo,
      passportVisited,
      passportLocal,
    });
  })
);

module.exports = router;
