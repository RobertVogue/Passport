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

    console.log(stamps);

    res.render('country', { country, stamps })
}));

module.exports = router;
