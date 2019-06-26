const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users', require('../api/interface/user'));
app.use('/users/login', require('../api/interface/login'));

app.use('/concerts', require('../api/interface/concert'));

module.exports = app;
