var express = require('express');
const bcrypt = require('brcyptjs');
var router = express.Router();
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection } = require("../utils");
const db = require("../db/models");

const { User } = db;

/* GET users listing. */
router.get('/', csrfProtection, (req, res, next) => {
  const newUser = User.build();
  res.render('pug-file-name', {newUser, csrfToken: req.csrfToken()})
});

router.post('/', csrfProtection, asyncHandler(async (req, res) => {

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
