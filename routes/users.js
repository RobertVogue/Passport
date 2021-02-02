var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection, userValidators} = require("./utils");
const db = require("../db/models");
// const { User } = db;
const { loginUser, logoutUser, requireAuth } = require("../auth.js");


router.get('/', (req, res) => {
  res.render('index');
})

router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const currentUser = db.User.findByPK(userId);
  res.render('profile', {currentUser});
}))


/* GET users listing. */
router.get('/signup', csrfProtection, (req, res) => {
  const newUser = db.User.build();
  res.render('signup', { newUser, csrfToken: req.csrfToken() })
});
//! bug in userValidators middleware will not save newUser in database if that is in there
router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const { username, displayName, email, password } = req.body;

  const newUser = db.User.build({ username, displayName, email})

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    console.log('do i exist?')
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.hashedPassword = hashedPassword;
    await newUser.save();
    loginUser(req, res, newUser)
    return req.session.save((err) => {
      if (err) {
        next(err);
      } else {
        res.redirect(`/users/${newUser.id}`);
      }
    });
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    console.log('errors array ---> ', errors);
    res.render('signup', { errors, csrfToken: req.csrfToken() });
  }

}))

router.get('/login', csrfProtection, (req, res) => {
    res.render('login', {csrfToken: req.csrfToken()});
})

router.post('/login', csrfProtection, asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          return req.session.save((err) => {
            if (err) next(err);
            else res.redirect(`/users/${user.id}`);
          });
        }
      }
      errors.push("No users exist with given email/password");
    }

    else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('users/login', {errors, csrfToken: req.csrfToken()});

}))

// logout
router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/users/login");
});

module.exports = router;
