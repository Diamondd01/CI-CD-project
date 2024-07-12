const {Pool} = require('pg');
const fs = require('fs')

const sslConfig ={
    ca:fs.readFileSync('/home/opc/OCI-Project/server/ca-cert.crt'),
    rejectUnauthorized:false
};
const pool = new Pool({
    user:'Admin',
    password:'Jalen22@',
    host:'yzbbqhsm62i3dbiwryy5a6vszdw3bq-primary.postgresql.us-ashburn-1.oc1.oraclecloud.com',
    port:5432,
    database:'postgres',
    ssl:sslConfig,
    max:20,
    idleTimeoutMillis:30000
});

async function testConnection() {
    try {
        const client = await pool.connect();
        await client.query('SELECT 1')
    }catch(error){
        console.error("error connecting", error)
        client.release();
    }
}
testConnection();

module.exports=pool;
