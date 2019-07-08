var express = require('express');
var router = express.Router();

router.use('/user', require('./user'));
router.use('/orderlist', require('./orderlist'));
router.use('/regular-delivery',require('./regular-delivery'));

module.exports = router;
