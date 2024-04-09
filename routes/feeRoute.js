const express = require('express')
const router = express.Router()
const calculateFee = require('../controllers/registrationController')

// route
router.post('/fee',calculateFee)

module.exports = router;