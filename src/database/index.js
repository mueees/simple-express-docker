const mongoose = require('mongoose');

// dynamic host which is based on docker-compose configuration
const DATABASE_HOST = 'database';

// use native Promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://' + DATABASE_HOST + ':27017/posts');

mongoose.connection.on('error', function (err) {
    console.log(err);
});

mongoose.connection.on('open', function () {
    console.log('Connection was established');
});