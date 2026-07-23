import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bhakas' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET shop page. */
router.get('/shop', function(req, res, next) {
  res.render('shop');
});

/* GET auth page. */
router.get('/auth', function(req, res, next) {
  res.render('auth');
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

export default router;
