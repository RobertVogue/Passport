const express = require('express');
const { asyncHandler } = require('./utils');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('home', {})
})

module.exports = router;