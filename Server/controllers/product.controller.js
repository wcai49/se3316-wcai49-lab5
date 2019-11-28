const Product = require('../models/product.model');
const Account = require('../models/account.model');
const path = require('path');
const jwt = require("express-jwt");
const Comment = require('../models/comment.model');


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

//search by name
exports.product_search = function (req, res) {
    Product.find( { name: req.body.Name }, function (err, product){
        if(err)
            res.send(err);
        console.log(product);
        res.json(product);
    } )
}
//create new product
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            album: req.body.album,
            artist: req.body.artist,
            rate: 0,
            reviews: [],
            hidden: false,
            reported: false
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
            console.log(err)
        res.send(product);
    })
};

//product update
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return console.log(err);
        res.send('Product udpated.');
    });
};

//product hide
exports.setHide = function (req, res){
    Product.findByIdAndUpdate(req.body.id, {
        hidden: true
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}
//product cancel hide
exports.cancelHide = function (req, res){
    Product.findByIdAndUpdate(req.body.id, {
        hidden: false
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}
//product add comment:
exports.product_comment = function (req, res){
    Product.findByIdAndUpdate(req.params.id,{$push: {"reviews": {
        user: req.body.user, 
        date: req.body.date,
        comment: req.body.comment,
        rate: req.body.rate
    }
    
    }}, function (err, product){
        if (err) 
            res.json({
                type: false,
                error: err
            });
        /*//product founud, then
        let comment = new Comment ({
            user: req.body.user,
            rate: req.body.rate,
            date: req.body.date,
            comment: req.body.comment
        });
        comment.save(product.reviews, function(err){
            if(err)
            console.log(err);
            
            else  
             res.json({
            type: true
        })
        });*/
       
    });
    Product.findByIdAndUpdate(req.params.id, {
        rate: req.body.totalRate
    }, function(err, product) {
        
    })
}

//product delete
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


//product Report
exports.product_report = function (req, res){
    Product.findByIdAndUpdate(req.body.id, {
        reported: true
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}


//confirm Report
exports.report_confirm = function (req, res){
    Product.findByIdAndUpdate(req.body.id, {
        hidden: true,
        reported: true
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}
//product cancel report
exports.cancel_report = function (req, res){
    Product.findByIdAndUpdate(req.body.id, {
        hidden: false,
        reported: false
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}


