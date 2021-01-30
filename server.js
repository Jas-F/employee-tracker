const mysql = require("mysql")
const express = require("express");

const app = express();

// var mysqlConnection = mysql.createConnection({
//     host : "localhost",
//     user : "root",
//     password : "password",
//     database : "Employee",
//     multipleStatements : true
// });

// mysqlConnection.connect((err) => {
//         if (!err) {
//             console.log("connected");
//         }

//         else {
//             console.log("failed");
//         }
//     })

app.listen('3000', () => {
    console.log('started');
});
    