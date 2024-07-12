const express = require('express');
const {Sequelize} = require('sequelize')

const path = require('path');

const app = express()

const port = 80
const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

app.listen(port,()=> {
    console.log('Server is running')
});

const sequelize = new Sequelize("database",'username','password',{
    host:'localhost',
    dialect:'postgres',
    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized:false
        }
    }
})
