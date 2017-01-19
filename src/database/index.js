var mongoose = require('mongoose');

// use native Promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://database:27017/posts');

mongoose.connection.on('error', function (err) {
    console.log(err);
});

mongoose.connection.on('open', function () {
    console.log('Connection was established');
});