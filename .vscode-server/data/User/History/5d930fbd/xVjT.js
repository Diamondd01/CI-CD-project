const express = require('express');

const path = require('path');

const app = express()
const publicDirectoryPath= path.join(__dirname, 'public');


app.use(express.static(publicDirectoryPath));


const port = 80;
app.use(express.static('public'));
app.listen(port,()=> {
    console.log('Server is not running')
})
