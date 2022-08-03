const express = require('express');
const { home } = require('../controllers/home_controller');


const router = express.Router();

console.log('Router loaded');


router.get('/', home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

//for any further routes, access from here 
// router.use('/routerName', require('./routerFile));



module.exports = router;