const { Pool } = require('pg')
const path = require('path')
const fs = require('fs')

const pool = new Pool({
    user:'Admin',
    host:'10.0.1.71',
    database:'postgresql-OCI-Project',
    password:'Jalen22@',
    port:5432
})

const schemaFilePath = path.resolve(__dirname, 'schema.SQL')
const schemaSQL =fs.readFileSync(schemaFilePath,'utf8')

pool.query(schemaSQL, (err,result)=> {
    if(err) {
        console.error('Error executing command')
    }else {
        console.error('Schemma running successfully')
    }

    pool.end();
})