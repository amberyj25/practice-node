var express = require('express');
var router = express.Router();
const practiceController = require('../controllers/practiceController');


/* GET home page. */
router.get('/', function (req, res, next) {
  // render view
  res.render('index', { title: 'Express' });
});

/* GET productList */
router.get('/productList', practiceController.getAllProduct);

/* POST productList */
/* postMan get value from body */
router.post('/product', function (req, res, next) {
  // postMan get value from body
  const product = req.body;

  productList.push({
    id: Date.now(),
    title: product.title
  });

  res.send({
    success: true,
    productList
  });

  res.end();
});

/* POST productList */
/* postMan get value from Params */
router.post('/product2', function (req, res, next) {
  // postMan get value from Params
  const product = req.query;
  console.log(50, product)

  productList.push({
    id: Date.now(),
    title: product.title
  });

  res.send({
    success: true,
    productList
  });

  res.end();
});

/* POST productList */
/* postMan get value value from url*/
router.post('/product3/:title', function (req, res, next) {
  // postMan get value from Params
  const product = req.params;

  productList.push({
    id: Date.now(),
    title: product.title
  });

  res.send({
    success: true,
    productList
  });

  res.end();
});

/* delete product */
/* postMan get value from url*/
router.delete('/product', function (req, res, next) {
  // postMan get value from Params
  const product = req.body;
  console.log(90, product);

  productList.forEach((item, key) => {
    if (item.id === product.id) productList.splice(key, 1);
  });

  res.send({
    success: true,
    data: productList
  });
  res.end();
});

module.exports = router;
