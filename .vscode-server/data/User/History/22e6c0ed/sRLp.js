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

app.get('/random-dish/:categoryName',async(req,res)=>{
  const {categoryNames} = req.params;
  try{
    const result = await pool.query(
    'SELECT * FROM Recipes WHERE category_id = ( SELECT category_id FROM Categories WHERE name = $1',[categoryNames])

    if(result.rows.length === 0){
      return res.status(400).json({error:'No recipe found'})
    }
    const randomIndex = Math.floor(Math.random()* result.rows.length);
    const randomRecipe = result.rows[randomIndex]
    res.json(randomRecipe)
  }catch(error){
    console.error('Error retrieving random recipe',error);
    res.status(500).json({error:'Internal server error'})
  }
});


module.exports = app;