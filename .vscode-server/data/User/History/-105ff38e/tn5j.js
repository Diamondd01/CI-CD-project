const { Pool } = require('pg')

const pool = new Pool({
    user:Admin,
    host:10.0.1.71,
    database:'postgresql-OCI-Project'
})