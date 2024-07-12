const bodyParser = require('express')
const express = require('express');
const pool = require('./db')

const path = require('path');
const { error } = require('console');

const app = express();

// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

// api router
app.get('/test',(req,res,next)=>{
  res.send('here')
  console.log('middlware for url')
  next()
});

app.get('/categories',async(req,res)=>{
  try {
    const result = await pool.query('SELECT name FROM Categories;');

    const categoryNames = result.rows.map(row=>row.name)

    res.json({categoryNames})
  }catch(error){
    console.error('Error retrieving information',error)
    console.log(error)
    
  }
});

app.get('random-dish/:categoryNames',async(req,res)=>{
  const {categoryNames} = req.params;

  try{
    console.log('Category Name',categoryNames)

    const query= 'SELECT * FROM Recipes WHERE category_id = (SELECT category_id FROM Categories WHERE name = $1'; 
  
    console.log('SQL QUERY:', query)

    const result = await pool.query(query,[categoryNames]);
    console.log('Query Result:', result.rows)
  }catch(error){
    console.error('Error getting information')
    res.status(500).json({error:'Internal Server Error'})
  }
});


module.exports = app;