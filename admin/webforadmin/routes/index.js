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

router.get('/QLngDung', function(req, res, next) {
  res.render('QLngDung', { title: 'quản lý người dùng' });
});

router.get('/thongke', function(req, res, next) {
  res.render('thongke', { title: 'thống kê' });
});

router.get('/QLDonHang', function(req, res, next) {
  res.render('QLDonHang', { title: 'Quản lý đơn hàng' });
});

router.get('/QLSanPham', function(req, res, next) {
  res.render('QLSanPham', { title: 'Quản lý sản phẩm' });
});

router.get('/QLGianHang', function(req, res, next) {
  res.render('QLGianHang', { title: 'Quản lý gian hàng' });
});

router.get('/Top10', function(req, res, next) {
  res.render('top10', { title: 'TOP10' });
});

router.get('/dsNgay', function(req, res, next) {
  res.render('dsNgay', { title: 'Doanh số/ngày' });
});

router.get('/dsTuan', function(req, res, next) {
  res.render('dsTuan', { title: 'Doanh số/tuần' });
});

router.get('/dsThang', function(req, res, next) {
  res.render('dsThang', { title: 'Doanh số/tháng' });
});

router.get('/dsQuy', function(req, res, next) {
  res.render('dsQuy', { title: 'Doanh số/quý' });
});

router.get('/dsNam', function(req, res, next) {
  res.render('dsNam', { title: 'Doanh số/năm' });
});
module.exports = router;
