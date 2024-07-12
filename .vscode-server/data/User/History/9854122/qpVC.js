const {Pool} = require('pg');
const fs = require('fs')

const sslConfig ={
    ca:fs.readFileSync('/home/opc/OCI-Project/server/ca-cert.crt')

}
const pool = new Pool({
    user:'Admin',
    password:'Jalen22@',
    host:" yzbbqhsm62i3dbiwryy5a6vszdw3bq-primary.postgresql.us-ashburn-1.oc1.oraclecloud.com",
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
testConnection();
