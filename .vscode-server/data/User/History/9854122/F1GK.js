const {Pool} = require('pg');

const pool = new Pool({
    user:'Admin',
    password:'Jalen22@',
    host:"150.136.71.117",
    port:5432,
    database:'postgres'
});

pool.query('SELECT 1', (err,res)=>{
    if(err) {
        console.error('Error connecting to db', err.stack)
    }else{
        console.log('Connected successfully to DB')
    }
});