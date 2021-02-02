var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection, userValidators} = require("./utils");
const db = require("../db/models");
// const { User } = db;
const { loginUser, logoutUser, requireAuth } = require("../auth.js");



/* GET users listing. */
router.get('/', csrfProtection, (req, res) => {
  const newUser = db.User.build();
  res.render('home', { newUser, csrfToken: req.csrfToken() })
});
//! bug in userValidators middleware will not save newUser in database if that is in there
router.post('/', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const { username, displayName, email, password } = req.body;

  const newUser = db.User.build({ username, displayName, email})

  const validatorErrors = validationResult(req);
  // console.log(validatorErrors)
  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.hashedPassword = hashedPassword;
    await newUser.save();
    loginUser(req, res, newUser)
    res.redirect('/', { newUser });
    // return req.session.save((err) => {
    //   if (err) {
    //     next(err);
    //   } else {
    //     res.redirect(`/users/${user.id}`);
    //   }
    // });
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    console.log("errors array------------->>", errors)
    res.render('error', { newUser, errors, csrfToken: req.csrfToken(), });
  }

}))


module.exports = router;
