const express = require('express');
const app = express()
const path = require('path');
const pool = require('./db');

const PORT = 80
const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

const init = async () => {
    try {
      await pool.sync();
  
      app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error starting server:', error)
    }
  };
  
  init();
  
