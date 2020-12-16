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

const findUser = (userInfo) =>{
    db.query(
        "SELECT * FROM users WHERE username = ? OR email = ? AND password = ?",
        [userInfo.username, userInfo.email, userInfo.password],
        (err, result) =>{
            if(err){
                console.log(err);
                console.log("ERRROR^^^^");
            }

            if(result){
                console.log(result);
                console.log("RESULT^^^^^");
            } else {
                console.log('YOU GET NOTHING, GOOD DAY SIR');
            }
        }
    );
}

router.post("/register", (req, res) =>{

    db.query(
        "INSERT INTO users (username, email, password) VALUES (?,?,?)", 
        [req.body.username, req.body.email, req.body.password], 
        (err, result) =>{
            if(err){
                console.log(err);
                console.log("ERRROR^^^^");
            }

            if(result){
                console.log(result);
                console.log("RESULT^^^^^");
            } else {
                console.log('YOU GET NOTHING, GOOD DAY SIR');
            }
        }
    );
});


db.connect((err) =>{
    if(!err){
        console.log("Connected$$$$$$$$$");
    }else{
        console.log("Connection failed!!!!!!!!!!!!");
        console.log(err, 'THE ERROR')
    }
});

module.exports = router;