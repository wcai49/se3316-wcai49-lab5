const Account = require('../models/account.model');
const path = require('path');
var jwt = require("jsonwebtoken");
var passwordHash = require('password-hash');

//find all accounts
exports.account_all = function(req, res) {
    Account.find(function (err, test) {
        if(err)
            res.send(err);
        res.json(test)
    });
}
//account authenticate
exports.account_Auth = function(req, res) {
    Account.findOne({username: req.body.username}, function(err, user){
        if(err){
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        }
        else {
            
            if(user){
                if(user.deactivated == true){
                    res.json({
                        type: 'deactivated',
                        data: user,
                    })
                }
                if(passwordHash.verify(req.body.password, user.password)){
                    
                    if(user.manager == true)
                        {
                            if(user.superManager){
                                    res.json({
                                    type: 'SuperManager',
                                    data: user,
                                    token: user.token
                                });
                            }
                            else{
                                    res.json({
                                    type: 'manager',
                                    data: user,
                                    token: user.token
                                });
                            }
                }
                    else
                    {
                    res.json({
                    type: true,
                    data: user,
                    token: user.token
                });
                }
                    
                }
                
                else {
                res.json({
                    type: false,
                    data: "Incorrect password"
                });
            }
            }
            else {
                res.json({
                    type: false,
                    data: "Incorrect username"
                });
            }
        }
    });
};

exports.account_SignUp = function(req, res){
    Account.findOne({username: req.body.username,  password: passwordHash.generate(req.body.password)}, function(err, user){
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } 
        else {
            if (user) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                        
                        let account = new Account(
                {
                    username: req.body.username,
                    password: passwordHash.generate(req.body.password),
                    token: '',
                    manager: false,
                    superManager: false,
                    deactivated: false
                }
            );
            let this_token = jwt.sign({account}, 'rubickIsGod', {expiresIn: '3h'});
            account.token = this_token;
            account.save(function (err, user1) {
                if (err) {
                    console.log(err)
                }
                res.json({
                    type: true,
                    data: account,
                    token: this_token
                });
            })
            //else ends
            }
        }
    });
}

exports.givePrivilege = function (req, res){
    Account.findByIdAndUpdate(req.body.id, {
        manager: true
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}

exports.cancelPrivilege = function (req, res){
    Account.findByIdAndUpdate(req.body.id, {
        manager: false
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}

exports.setDeactivated = function (req, res){
    Account.findByIdAndUpdate(req.body.id, {
        deactivated: true
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}

exports.cancelDeactivated = function (req, res){
    Account.findByIdAndUpdate(req.body.id, {
        deactivated: false
    }, function(err, product) {
        if(err)
            console.log(err);
    })
}