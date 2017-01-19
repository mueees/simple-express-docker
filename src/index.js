'use strict';

const express = require('express');

// Constants
const PORT = 7777;

// Database
require('./database');

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);