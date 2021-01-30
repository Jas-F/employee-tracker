const mysql = require("mysql")
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "Edureka",
    multipleStatements : true
});
    