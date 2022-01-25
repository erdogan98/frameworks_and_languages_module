var express = require('express');
var router = express.Router();
var cors = require('cors');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Programming Frameworks and Languages' });
});

var options = {   
  origin: '*',
  methods: 'GET,POST,DELETE, OPTIONS',
  allowedHeaders: 'Content-Type',
  optionsSuccessStatus: 204
}

router.options('/', cors(options));

module.exports = router;
