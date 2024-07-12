const express = require('express');
const app = require('./app')
const path = require('path');


const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

app.listen(,()=> {
    console.log('Server is running')
})