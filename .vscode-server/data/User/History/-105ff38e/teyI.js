const { Pool } = require('pg')
const path = require('path')
const fs = require('fs')

const pool = new Pool({
    user:'Admin',
    host:'10.0.1.71',
    database:'postgres',
    password:'Jalen22@',
    port:5432
})

const schemaFilePath = path.resolve(__dirname, 'schema.SQL')
const schemaSQL =fs.readFileSync(schemaFilePath,'utf8')

pool.query(schemaSQL, (result,err)=> {
    {
        console.log(result)
    }

    pool.end();
})