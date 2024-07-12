const {Pool} = require('pg');

const pool = new Pool({
    user:'Admin',
    password:'Jalen22@',
    host:"127.0.0.1",
    port:5432,
    database:'postgres'
});

pool.query('SELECT NOW()', (err,res)=>{
    if(err) {
        console.error('Error connecting to db', err.stack)
    }else{
        console.log('Connected successfully to DB')
    }
});