const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");

const { requireAuth } = require("../auth.js");
const {
  getStamps,
  get100Stamps,
  getUserPassports,
  getGoingToPassports,
  getLocalPassports,
  getVisitedPassports,
  getComments,
  getTags,
  getUsersTags,
} = require("../data-access-layer/utils");

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const userid = req.params.id;
    const getStamps2 = await getStamps(userid);
    const allTags = await getTags();
    const comments = await getComments(userid);
    const passports = await getUserPassports(userid);
    const tags = await getUsersTags(userid);
    const passportGoingTo = await getGoingToPassports(userid);
    const passportVisited = await getVisitedPassports(userid);
    const passportLocal = await getLocalPassports(userid);
    const stamps = await get100Stamps(userid);
    const images = getStamps2.map((stamp) => stamp.imgURL);
    const stampIds = stamps.map((stamp) => stamp.id);
    const names = getStamps2.map((stamp) => stamp.name);
    const obj = {};
    images.forEach((cur, index) => {
      obj[names[index]] = cur;
    });
    const resObj = {};
    stampIds.forEach((cur, index) => {
      resObj[names[index]] = cur;
    });
    const tagsObj = {};
    tags.forEach((tag) => {
      const { name } = tag;
      tagsObj[name] = stampIds[tag.id];
    });
    console.log(tagsObj);
    res.render("profile", {
      resObj,
      obj,
      getStamps2,
      passports,
      passportGoingTo,
      passportVisited,
      passportLocal,
      comments,
      tagsObj,
      allTags
    });
  })
);

module.exports = router;
