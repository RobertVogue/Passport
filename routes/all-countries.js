const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models")


router.get("/", asyncHandler(async (req, res) => {
    const countries = await db.Country.findAll();
    res.render('all-countries', { countries } );
}))

router.get( "/:id(\\d+)", asyncHandler(async (req, res) => {
    const countryId = req.params.id;
    const country = await db.Country.findByPk(countryId);

    const stamps = await db.Stamp.findAll({
        where: {
            countries_id: countryId
        }
    });
    res.render('country', { country, stamps, })
  }));
  // raymond's way
  // const stampObj = {};
  // const stampIds = stamps.map((stamp) => stamp.id);
  // const names = stamps.map((stamp) => stamp.name);
  // const images = stamps.map((stamp) => stamp.imgURL);
  // const obj = {};
  // images.forEach((cur, index) => {
  //   obj[names[index]] = cur;
  // });
  // stampIds.forEach((cur, index) => {
  //   stampObj[names[index]] = cur;
  // });

  // console.log(stamps);

  // res.render('country', { stampObj, country, stamps, obj })

module.exports = router;
