const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const path = require('path');
const { error } = require('console');


// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static( 'public'));

// api router
app.get('/test',(req,res,next)=>{
  res.send('here')
  console.log('middlware for url')
  next()
});