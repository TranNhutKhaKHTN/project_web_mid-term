var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

router.get('/store', function(req, res, next) {
  res.render('store', { title: 'Store' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/single', function(req, res, next) {
  res.render('single', { title: 'Single' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/reset', function(req, res, next) {
  res.render('reset', { title: 'Reset' });
});

router.get('/nokia', function(req, res, next) {
  res.render('nokia', { title: 'Nokia' });
});

router.get('/samsung', function(req, res, next) {
  res.render('samsung', { title: 'Samsung' });
});

router.get('/apple', function(req, res, next) {
  res.render('apple', { title: 'Apple' });
});

router.get('/acount', function(req, res, next) {
  res.render('acount', { title: 'Acount' });
});

router.get('/chancepass', function(req, res, next) {
  res.render('chancepass', { title: 'Đổi mật khẩu' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'history' });
});

router.get('/delivery', function(req, res, next) {
  res.render('delivery', { title: 'delivery' });
});
module.exports = router;
