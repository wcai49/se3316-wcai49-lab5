const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', product_controller.product_display);
router.get('/products', product_controller.product_display);
router.get('/:id', product_controller.product_details);
router.post('/create', product_controller.product_create);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
module.exports = router;
