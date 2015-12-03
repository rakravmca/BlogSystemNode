var User = require('../models/user');
var express = require('express');
var router = express.Router();
var auth = require('../auth');
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

router.post('/auntheticate', auth.authenticate);

module.exports = router;