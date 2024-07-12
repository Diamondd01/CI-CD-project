const express = require('express');

const path = require('path');

const app = express()

const port = 80
;
const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

app.get("/", (req,res)=> {
    res.send("Hello Diamond")
})

app.listen(port,()=> {
    console.log('Server is running')
})
