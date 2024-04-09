const express = require('express')
const router = express.Router()
const calculateFee = require('../controllers/registrationController')

// route
router.post('/register',calculateFee)

module.exports = router;
