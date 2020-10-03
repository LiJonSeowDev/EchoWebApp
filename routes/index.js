var express = require('express');
var router = express.Router();

let {getLanding} = require('../controller/landing.js');

/* GET home page. */
router.get('/', getLanding);

module.exports = router;
