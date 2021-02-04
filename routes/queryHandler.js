const express = require("express");
const queryHandlerRouter = express.Router();
const { asyncHandler } = require("../routes/utils");

const {
  createNewUser, // ( username, displayname, email, passwordToBeHashed)
  updateusername, // (userid, [name], newName)
  updateEmail, // (userid, [email], newEmail)
  updatePassword, // (id, [email], oldPassword, newPassword)
} = require("../data-access-layer/user");
const {
  updateUserDisplayName, // (userid , [displayName] , newDisplayName)
  findUserById,
  getStamps,
  getUserPassports,
  findStamp,
  findOwnerId,
} = require("../data-access-layer/utils");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = await updateUserDisplayName(1, null, "Demo");
    console.log(results);
    return res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
