var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kitties for Dayz' });
});

module.exports = router;
