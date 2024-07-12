const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const path = require('path');
const { error } = require('console');


// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static( 'public'));

module.exports = app;