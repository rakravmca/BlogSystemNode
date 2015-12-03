var mongoose = require('mongoose'),
    config = require('./config');

module.exports = function () {
    var db = mongoose.connect(config.connectionstring);

    //attach lister to connected event
    mongoose.connection.once('connected', function () {
        console.log("Connected to database")
    });
};