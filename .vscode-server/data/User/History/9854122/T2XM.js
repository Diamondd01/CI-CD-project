const {Pool} = require('pg');
const fs = require('fs')

const sslConfig ={
    ca:fs.readFileSync(__dirname + 'C:/Users/dijewell/Desktop/CaCertificate-postgresql-OCI-Project.pub')

}
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

async function testConnection() {
    let client;
    try {
        await pool.connect();
        console.log('Connected to DB')
    }catch(error){
        console.error("error connecting", error)
    } finally{
      await pool.end();
    }
}
