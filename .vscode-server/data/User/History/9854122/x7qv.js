const {Pool} = require('pg');
const fs = require('fs')
 const CaCert =fs.readFileSync("C:\Users\dijewell\Desktop\CaCertificate-postgresql-OCI-Project.pub")

const sslConfig ={
    ca:CaCert
}; 
const pool = new Pool({
    user:'Admin',
    password:'Jalen22@',
    host:"150.136.71.117",
    port:5432,
    database:'postgres',
    ssl:sslConfig,
    max:20,
    idleTimeoutMillis:30000
});

module.exports =pool