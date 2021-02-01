const { check } = require('express-validator');


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

module.exports = { userValidators };
