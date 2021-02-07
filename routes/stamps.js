const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models")

router.get( "/:id(\\d+)", asyncHandler(async (req, res) => {
    const stampId = req.params.id;

    const stamp = await db.Stamp.findByPk(stampId);

    const passport = await db.Passport.findByPk(stamp.passport_id);

    const user = await db.User.findByPk(passport.user_id);

    const country = await db.Country.findByPk(stamp.countries_id)

    const tag = await db.Tag.findByPk(stamp.tags_id)

    res.render("view-stamp", { stamp, passport, country, tag, user });
  })
);

module.exports = router;
