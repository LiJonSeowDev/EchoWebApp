var express = require('express');
var router = express.Router();

let {getLanding, submitLeads} = require('../controller/landing.js');


/* GET home page. */
router.get('/', getLanding);
router.post('/', submitLeads);


module.exports = router;
