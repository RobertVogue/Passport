const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { get100Stamps } = require("../data-access-layer/utils");

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const userid = req.params.id;

    const stamps = await get100Stamps(userid);
    const images = stamps.map((stamp) => stamp.imgURL);
    const stampIds = stamps.map((stamp) => stamp.id);
    const names = stamps.map((stamp) => stamp.name);
    const obj = {};
    const data = images.reduce((acc, cur, index) => {
      obj[cur] = names[index];
    });
    console.log(obj);
    res.render("profile", { obj });
  })
);

module.exports = router;
