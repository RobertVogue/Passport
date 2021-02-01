var express = require('express');
const bcrypt = require('brcyptjs');
var router = express.Router();
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../db/models");

const { User } = db;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
