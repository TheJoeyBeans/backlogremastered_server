const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "backlogremastered_database",
    password: "Supersonic64!",
    port: 3306,
    multipleStatements: true
});

db.post("/register", (req, res) =>{
    console.log(req.body);
    console.log("HERE IS THE REQ BODY");
    // db.query("INSERT INTO users (username, email, password) VALUES (?,?)", 
    // [username, email, password], 
    // (err, result) =>{
    //     console.log(err);
    // })
})

db.connect((err) =>{
    if(!err){
        console.log("Connected$$$$$$$$$");
    }else{
        console.log("Connection failed!!!!!!!!!!!!");
        console.log(err, 'THE ERROR')
    }
});

module.exports = router;