var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about');
});

router.get('/blog', function(req, res, next) {
  res.render('pages/blog');
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contacts');
});

router.get('/home', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
