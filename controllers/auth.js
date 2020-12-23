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


//Registers user, looks for existing user and if they are not present registers a new one.
router.post("/register", (req, res) =>{
    db.query(
        "SELECT * FROM users WHERE username = ? OR email = ? AND password = ?",
        [req.body.username, req.body.email, req.body.password],
        (err, result) =>{
            if(err){
                console.log(err);
                res.send({
                    responseType: "error",
                    errorMessage: "We had a problem registering your account, please try again later."
                });
            }
            if(result && result.length <= 0){
                db.query(
                    "INSERT INTO users (username, email, password) VALUES (?,?,?)", 
                    [req.body.username, req.body.email, req.body.password], 
                    (err, result) =>{
                        if(err){
                            console.log(err);
                            res.send({
                                responseType: "error",
                                errorMessage: "We had a problem registering your account, please try again later."
                            });
                        }
                        if(result){
                            res.send({
                                responseType: "success",
                                response: result
                            });
                        } else {
                            res.send({
                                responseType: "error",
                                errorMessage: "We had a problem registering your account, please try again later."
                            })
                        }
                    }
                );
            }else if(result && result.length > 0){
                res.send({
                    responseType: "error",
                    errorMessage: "This E-Mail is already registered."
                });
            }
        }
    )
});

//Signs users into their account.
router.post("/signIn", (req, res) =>{
    db.query(
        "SELECT * FROM users WHERE username = ? OR email = ? AND password = ?",
        [req.body.username, req.body.email, req.body.password], 
        (err, result) =>{
            if(err){
                console.log(err);
                res.send({
                    responseType: "error",
                    errorMessage: "We had a problem signing you in, please try again later."
                });
            }
            if(result && result.length > 0){
                res.send({
                    responseType: "success",
                    response: result
                });
            } else {
                res.send({
                    responseType: "error",
                    errorMessage: "Incorrect E-mail or Password"
                });
            }
        }
    )
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