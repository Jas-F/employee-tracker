const mysql = require("mysql")
const express = require("express");

const app = express();

// create connection 
var Connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "Employee",
});

Connection.connect((err) => {
        if (err) {
            console.log("err");
        }
        console.log('connected');
    })

app.listen('3000', () => {
    console.log('started');
});
    