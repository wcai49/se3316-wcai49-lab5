const Product = require('../models/product.model');
const path = require('path');

//Simple version, without validation or sanitation
exports.load = function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'lab3.html' ));
};

exports.product_display = function (req, res) {
    Product.find(function (err, test) {
        if(err)
            res.send(err);
        res.json(test)
    });
};
//create new product
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            quantity:  req.body.quantity,
            due: req.body.due,
            cnName: req.body.cnName,
            type: req.body.type
        }
    );

    product.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send('Product Created successfully');
    })
};

//check product detail
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err)
            return next(err);
        res.send(product);
    })
};

//product update
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//product delete
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
