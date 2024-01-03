var express = require('express');
var router = express.Router();
const practiceController = require('../controllers/practiceController');

/* GET productList */
router.get('/productList', practiceController.getAllProduct);

/* POST productList */
/* postMan get value from body */
router.post('/product', practiceController.postProdcut);

/* POST productList */
/* postMan get value from url?後 */
router.post('/productQuery', practiceController.postProdcutQuery);

/* POST productList */
/* postMan get value value from body*/
router.delete('/deleteProduct', practiceController.deleteProdcut);
/* POST productList */
/* postMan get value value from url params*/
router.delete('/deleteProductQuery/:id', practiceController.deleteProdcutQuery);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
module.exports = router;
