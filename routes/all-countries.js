const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models")

router.get("/", asyncHandler(async (req, res) => {
    res.render('all-countries', {} );
}))

module.exports = router;
