const express = require('express');
const { home } = require('../controllers/home_controller');

const router = express.Router();



console.log('Router loaded');
router.get('/', home);

module.exports = router;