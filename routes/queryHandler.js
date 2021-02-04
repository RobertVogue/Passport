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
} = require("../data-access-layer/utils");

/* GET home page. */
queryHandlerRouter.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const results = await createStamp(
      "test",
      "test location",
      1,
      1,
      1,
      "10-11-20:11-11-20",
      "$$$",
      "this was the best test.",
      5
    );
    console.log(results);
    return res.render("queryHandler", { results });
  })
);

module.exports = queryHandlerRouter;
