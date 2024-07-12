const express = require('express');

const app = require("./server/app");

const port = 80

app.listen(port,()=> {
    console.log('Server is running')
})
