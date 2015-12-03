var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('user', {
        title: 'Express', 
        scripts: [
            '/javascripts/home.js'
        ]
    });
});

module.exports = router;