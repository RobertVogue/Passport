const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
  asyncHandler,
  csrfProtection,
  userValidators,
  loginValidators,
} = require("./utils");
const db = require("../db/models");
const { loginUser, logoutUser, requireAuth } = require("../auth.js");

router.get("/", (req, res) => {
  res.render("index");
});

//User sign up to render the form
router.get("/signup", csrfProtection, (req, res) => {
  const newUser = db.User.build();
  res.render("signup", { newUser, csrfToken: req.csrfToken() });
});

// User to post the new user to the database
router.post(
  "/signup",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { username, displayName, email, password } = req.body;


  const newUser = db.User.build({ username, displayName, email})
  // const newUser = db.User.create({ username, displayName, email})

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.hashedPassword = hashedPassword;
    await newUser.save();
    const newuserId = newUser.id;
    await db.Passport.create({ passport_status:'Local', user_id: newuserId});
    await db.Passport.create({ passport_status:'Visited', user_id: newuserId});
    await db.Passport.create({ passport_status:'Will Visit', user_id: newuserId});
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
    res.render('signup', { username, email, displayName, errors, csrfToken: req.csrfToken() });
  }

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      newUser.hashedPassword = hashedPassword;
      await newUser.save();
      loginUser(req, res, newUser);
      return req.session.save((err) => {
        if (err) {
          next(err);
        } else {
          res.redirect(`/users/${newUser.id}`);
        }
      });
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("signup", {
        username,
        email,
        displayName,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

// logout
router.post("/logout", (req, res) => {
  logoutUser(req, res);
  return req.session.save((err) => {
    if (err) next(err);
    else res.redirect("/users/login");
  });
});

router.get("/login", csrfProtection, (req, res) => {
  res.render("login", { csrfToken: req.csrfToken() });
});

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });

      if (user) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);
          return req.session.save((err) => {
            if (err) next(err);
            else res.redirect(`/users/${user.id}`);
          });
        }
      }
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
      errors.push("No users exist with given email/password");
      res.render("login", { email, errors, csrfToken: req.csrfToken() });
    }
  })
);

//create a post for demo user
router.post(
  "/demo",
  asyncHandler(async (req, res) => {
    const demoUser = await db.User.findOne({
      where: { email: "demo@demo.com" },
    });
    loginUser(req, res, demoUser);
    return req.session.save((err) => {
      if (err) next(err);
      else res.redirect(`/users/${demoUser.id}`);
    });
  })
);



module.exports = router;
