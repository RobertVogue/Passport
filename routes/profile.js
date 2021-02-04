const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { getTenStamps } = require("../data-access-layer/utils");

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const userid = req.params.id;

    const stamps = await getTenStamps(userid);
    const images = stamps.map((stamp) => stamp.imgURL);
    const stampIds = stamps.map((stamp) => stamp.id);
    res.render("profile", { images, stampIds });
  })
);

module.exports = router;
