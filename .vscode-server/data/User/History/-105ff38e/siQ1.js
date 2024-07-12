const pg = require('pg')
const {Pool , Client}= pg

const pool = new Pool({
    user:'Admin',
    host:'10.0.1.71',
    database:'postgres',
    password:'Jalen22@',
    port:5432
})



const client = new Client({
    user:'Admin',
    host:'10.0.1.71',
    database:'postgres',
    password:'Jalen22@',
    port:5432 
})

await client.connect()

console.log(await client.query('SELECT NOW()'))

await client.end()