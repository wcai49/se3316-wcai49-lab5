const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', product_controller.product_display);
router.get('/products', product_controller.product_display);
router.post('/search/', product_controller.product_search);
router.get('/:id', product_controller.product_details);

router.post('/create', product_controller.product_create);

router.put('/:id/update', product_controller.product_update);
router.put('/:id/comment', product_controller.product_comment);

router.delete('/:id/delete', product_controller.product_delete);



module.exports = router;