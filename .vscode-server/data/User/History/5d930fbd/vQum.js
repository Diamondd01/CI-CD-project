const express = require('express');
const app = require('./app')

const port = 80


app.use(express.static(publicPath))

app.listen(port,()=> {
    console.log('Server is running')
})
