var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection} = require("../utils");
const db = require("../db/models");
// const { User } = db;
const { loginUser, logoutUser, requireAuth } = require("../auth.js");



/* GET users listing. */
router.get('/', csrfProtection, (req, res) => {
  const newUser = db.User.build();
  res.render('home', { newUser, csrfToken: req.csrfToken() })
});

const userValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for User Name')
    .isLength({ max: 50 })
    .withMessage('User Name must not be more than 50 characters long'),
  check('displayName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Display Name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

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
    res.redirect('/users', { newUser });
    // return req.session.save((err) => {
    //   if (err) {
    //     next(err);
    //   } else {
    //     res.redirect(`/users/${user.id}`);
    //   }
    // });
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('error', { newUser, errors, csrfToken: req.csrfToken(), });
  }

}))


module.exports = router;
