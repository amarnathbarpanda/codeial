const express = require('express');
const { profile } = require('../controllers/users_controller');

const router = express.Router();

router.get('/profile', profile);

module.exports = router;