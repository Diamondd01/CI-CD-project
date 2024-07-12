const express = require('express');
const app = require('./app')
const path = require('path');

const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

const {PORT = 80} = process.env;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});