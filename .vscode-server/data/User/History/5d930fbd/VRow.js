const express = require('express');

const path = require('path');

const app = express()

const port = 80


// serve up static files (e.g. html and css files)
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port,()=> {
    console.log('Server is running')
})
