const express = require("express");
const queryHandlerRouter = express.Router();
const { asyncHandler } = require("../routes/utils");
const {
  getUserPassports,
  getUserPassportSV,
  getUserPassportSWT,
  getUserPassportSNB,
} = require("../data-access-layer/passport");
const { findStamp, findOwnerId } = require("../data-access-layer/stamps");
const {
  findUserById,
  updateUserDisplayName,
  createNewUser,
  updateusername,
  updateEmail,
  updatePassword,
} = require("../data-access-layer/user");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = getUserPassports(1);
    res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
