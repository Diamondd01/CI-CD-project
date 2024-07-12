const express = require('express');
const app = express()
const path = require('path');
const pool = require('./db');

const port = 80
const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

const init = async () => {
    try {
      await db.sync();
  
      app.listen(port () => {
        console.log(`Server listening at http://localhost:${port}`);
      });
    } catch (error) {
      console.error('Error starting server:', error)
    }
  };
  
  init();
  
