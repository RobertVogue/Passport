const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");

router.get("/", (req, res) => {
  res.render("stamps-create", {});
});

module.exports = router;
