const express = require("express");
const queryHandlerRouter = express.Router();
const { asyncHandler } = require("../routes/utils");

const {
  findStamp,
  findOwnerId,
  // getAllStamps,
} = require("../data-access-layer/stamps");
const {
  findUserById,
  updateUserDisplayName,
  createNewUser,
  updateusername,
  updateEmail,
  updatePassword,
} = require("../data-access-layer/user");
const { getStamps, getUserPassports } = require("../data-access-layer/utils");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = await findStamp(1);
    console.log(results);
    return res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
