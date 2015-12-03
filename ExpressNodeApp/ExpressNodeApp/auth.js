var User = require('./models/user');

module.exports.checkauth = function (req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.send('You are not authorized to view this page. For login click here <a href="/login">Login</a>');
    }
};

module.exports.logout = function (req, res, next) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/login');
        }
    });
};

module.exports.authenticate = function (req, res) {
    User.findOne({ username: 'rakesh' }, function (err, result) {
        if (err) {
            res.json({
                success: false,
                error: 'You have entered incorrect username/password.'
            });
        }
        
        req.session.username = req.body.username;
        res.json(result);
    });
};