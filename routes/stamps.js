const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { get100Stamps } = require("../data-access-layer/utils");
const { loginUser, logoutUser, requireAuth } = require("../auth.js");

router.get( "/:id(\\d+)/stamps/:stampId(\\d+)", asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const stampId = req.params.stampId;



    res.render("view-stamp", { obj });
  })
);

module.exports = router;
