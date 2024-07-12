const express = require('express');
const app = express()
const path = require('path');
const pool = require('./db');

const port = 80
const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

app.listen(port,()=> {
    console.log('Server is running')
})
