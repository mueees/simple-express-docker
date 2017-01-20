'use strict';

const express = require('express');

// Constants
const PORT = 7777;

var visitCounts = 0;

// Database
// require('./database');

// App
const app = express();
app.get('/', function (req, res) {
    visitCounts++;

    res.send('Visit counts : ' + visitCounts + '\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);