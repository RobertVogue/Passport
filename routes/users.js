var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection } = require("../utils");
const db = require("../db/models");
// const { userValidators } = require('../auth.js')

const { User } = db;


/* GET users listing. */
router.get('/', handleValidationErrors, csrfProtection, (req, res, next) => {
  res.render('home', { csrfToken: req.csrfToken() })
});

router.post('/', handleValidationErrors, csrfProtection, asyncHandler(async (req, res) => {
  const { userName, displayName, email, password } = req.body;
  let result = false;
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
        result = true;
      })
  // const validatorErrors = userValidators(req);
// console.log(validatorErrors)
  if (result) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ userName, displayName, email, hashedPassword });
    res.redirect('/users', { newUser });
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('error', { errors, csrfToken: req.csrfToken(), });
  }

}))

// router.post('/', csrfProtection, userValidators,
//   asyncHandler(async (req, res) => {
//     const { emailAddress, firstName, lastName, password } = req.body;
//     const user = db.User.build({
//       emailAddress,
//       firstName,
//       lastName,
//     });
//     const validatorErrors = validationResult(req);
//     if (validatorErrors.isEmpty()) {
//       await user.save();
//       res.redirect('/');
//     } else {
//       const errors = validatorErrors.array().map((error) => error.msg);
//       res.render('user-register', {
//         title: 'Register',
//         user,
//         errors,
//         csrfToken: req.csrfToken(),
//       });
//     }
//   }));

module.exports = router;
