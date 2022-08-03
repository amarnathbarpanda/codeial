const express = require('express');
const { post } = require('../controllers/post_controller');

const router = express.Router();



router.get('/', post);

module.exports = router;