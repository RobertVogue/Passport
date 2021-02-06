const express = require("express");
const queryHandlerRouter = express.Router();
const { asyncHandler } = require("../routes/utils");

const {
  getTenStamps,
  updateEmail, // (userid, [email], newEmail)
  updatePassword, // (id, [email], oldPassword, newPassword)
  updateusername, // (userid, [name], newName)
  createNewUser, // ( username, displayname, email, passwordToBeHashed)
  updateUserDisplayName, // (userid , [displayName] , newDisplayName)
  findUserById,
  getStamps,
  getUserPassports,
  findStamp,
  findOwnerId,
  createTag,
  createStamp,
  getTopCountries,
} = require("../data-access-layer/utils");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = await getTopCountries(1);
    console.log(results);
    return res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
