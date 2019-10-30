var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/store.html', function(req, res, next) {
  res.render('istore', { title: 'Express' });
});

router.get('/blog.html', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
module.exports = router;
