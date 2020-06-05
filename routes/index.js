var express = require('express');
var router = express.Router();
var stock = require('../src/stock');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/stock', function(req, res, next) {
  var results = stock.init(null,function (results) {
    res.jsonp(results);
  });
});

module.exports = router;
