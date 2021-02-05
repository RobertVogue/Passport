const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { get100Stamps } = require("../data-access-layer/utils");
const { loginUser, logoutUser, requireAuth } = require("../auth.js");

router.get( ":id(\\d+)", asyncHandler(async (req, res) => {
    const stampId = req.params.id;




    res.render("view-stamp", { obj });
  })
);

module.exports = router;
