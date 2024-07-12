const express = require('express');

const path = require('path');

const app = express()
const publicDirectoryPath= path.join(__dirname, 'public');


app.use(express.static(publicDirectoryPath));



const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

app.listen(port,()=> {
    console.log('Server is running')
})
