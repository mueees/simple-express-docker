const mongoose = require('mongoose');

// hardcoded database host based on custom docker network
const DATABASE_HOST = '172.18.0.2';

// use native Promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://' + DATABASE_HOST + ':27017/posts');

mongoose.connection.on('error', function (err) {
    console.log(err);
});

mongoose.connection.on('open', function () {
    console.log('Connection was established');
});