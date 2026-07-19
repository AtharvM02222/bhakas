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

export default router;
