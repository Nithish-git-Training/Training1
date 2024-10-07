const express = require('express');
const { registerWithConfirmation } = require('../controllers/authController');


const router = express.Router();

router.post('/register-with-confirmation', registerWithConfirmation);

module.exports = router;
