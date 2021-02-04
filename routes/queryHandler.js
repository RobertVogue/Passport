const express = require("express");
const queryHandlerRouter = express.Router();
const { asyncHandler } = require("../routes/utils");

const {
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
} = require("../data-access-layer/utils");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = await updateEmail(2, null, "new@test.email");
    console.log(results);
    return res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
