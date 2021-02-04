const express = require("express");
const queryHandlerRouter = express.Router();
const { asyncHandler } = require("../routes/utils");

const {
  findUserById,
  updateUserDisplayName,
  createNewUser,
  updateusername,
  updateEmail,
  updatePassword,
} = require("../data-access-layer/user");
const {
  getStamps,
  getUserPassports,
  findStamp,
  findOwnerId,
} = require("../data-access-layer/utils");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = await findOwnerId(1);
    console.log(results);
    return res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
