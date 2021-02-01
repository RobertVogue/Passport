var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection } = require("../utils");
const db = require("../db/models");
const { userValidators } = require('../auth.js')

const { User } = db;


/* GET users listing. */
router.get('/', handleValidationErrors, csrfProtection, (req, res, next) => {
  res.render('/home', {csrfToken: req.csrfToken()})
});

router.post('/', handleValidationErrors, csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {userName, displayName, password, confirmedPassword} = req.body;

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = User.create({userName, displayName, hashedPassword});
    res.redirect('/my-profile', {newUser});
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('/', { errors, csrfToken: req.csrfToken(), });
  }

}))

router.post('/', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const { emailAddress, firstName, lastName, password } = req.body;
    const user = db.User.build({
      emailAddress,
      firstName,
      lastName,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await user.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

module.exports = router;
