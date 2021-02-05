const express = require('express');
const router = express.Router();
// const { asyncHandler, csrfProtection } = require('./utils');

router.get('/', (req, res) => {

    res.render('team', {})
})



module.exports = router;
