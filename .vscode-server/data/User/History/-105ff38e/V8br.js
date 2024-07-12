
const pg = require('pg')
const { Pool, Client } =pg

const pool = new Pool({
    user:'Admin',
    host:'10.0.1.71',
    database:'postgres',
    password:'Jalen22@',
    port:5432
})

pool.query('SELECT NOW()' , (err,res) =>{
    if (err) {
        console.error('error executing query')
    }
    else{
        console.log('sucess executing')
    }
})


const client = new Client({
    user:'Admin',
    host:'10.0.1.71',
    database:'postgres',
    password:'Jalen22@',
    port:5432 
})

(async () => {
    try{
        await client.connect()
        console.log("Connected to database")

        const result = await client.query('SELECT NOW()');
        console.log('Result', result.rows)
    }catch(err) {
        console.error('error connecting to db', err)
    }finally {
        await client.end();
        console.log('Disconnected from db')
    }
})();