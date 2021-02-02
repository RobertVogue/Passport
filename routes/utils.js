
const { check } = require('express-validator');
const  { validationResult } = require('express-validator');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});
const db = require("../db/models");

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => error.msg);

        const err = Error("Bad Request.");
        err.status = 400;
        err.title = "Bad Request.";
        err.errors = errors;
        return next(err);

    }

    next();
}



const userValidators = [
    check("username")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Username")
      .isLength({ max: 50 })
      .withMessage("Username must not be more than 50 characters long")
      .custom((value) => {
        return db.User.findOne({ where: { username: value } }).then((user) => {
          if (user) {
            return Promise.reject(
              "The username is already in use"
            );
          }
        });
      }),
    check("displayName")
      .exists({checkFalsy: true})
      .withMessage("Please provide a value for Display Name")
      .isLength({max: 50})
      .withMessage("Display Name must not be more than 50 characters long"),
    check("email")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for email")
      .isLength({ max: 255 })
      .withMessage(
        "No email address longer than 255 characters"
      )
      .isEmail()
      .withMessage("Email Address is not a valid email")
      .custom((value) => {
        return db.User.findOne({ where: { email: value } }).then((user) => {
          if (user) {
            return Promise.reject(
              "The provided Email Address is already registered"
            );
          }
        });
      }),
    check("password")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Password")
      .isLength({ max: 50 })
      .withMessage("Password must not be more than 50 characters long"),
    //.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    //.withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check("confirmPassword")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Confirm Password")
      .isLength({ max: 50 })
      .withMessage("Confirm Password must not be more than 50 characters long")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Confirm Password does not match Password");
        }
        return true;
      }),

  ];

  const loginValidators = [
    check("email")
      .exists({ checkFalsy: true })
      .withMessage("Email field cannot be empty"),
    check("password")
      .exists({ checkFalsy: true })
      .withMessage("Password field cannot be empty"),
  ];

module.exports = { asyncHandler, handleValidationErrors, csrfProtection, userValidators, logInValidators };
