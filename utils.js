
const { check } = require('express-validator');
const  { validationResult } = require('express-validator');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});

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

module.exports = { userValidators, asyncHandler, handleValidationErrors, csrfProtection };
