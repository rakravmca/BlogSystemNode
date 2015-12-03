var User = require('../models/user');
var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('login', {
        title: 'Express', 
        scripts: [
            '/javascripts/login.js'
        ]
    });
});

//router.route('/auntheticate').post(function (req, res) {
//    User.findOne({ username: 'rakesh' }, function (err, result) {
//        if (err) {
//            return res.send(err);
//        }
                
//        req.session.username = req.body.username;
//        res.json(result);
//    });
//});

module.exports = router;