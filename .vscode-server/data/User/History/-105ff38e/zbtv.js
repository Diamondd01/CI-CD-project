const { Pool } = require('pg')
const fs = require('fs')

const pool = new Pool({
    user:Admin,
    host:10.0.1.71,
    database:'postgresql-OCI-Project',
    password:'Jalen22@'
    port:5432
})