const mysql = require("mysql");
const express = require("express");
const inquirer = require('inquirer');
const app = express();
const table = require('cli-table');
// create connection 
var Connection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user : "root",
    password : "password",
    database : "Employee",
});

Connection.connect((err) => {
        if (err) {
            console.log("err");
        }
        console.log('connected');

        manageEmployees()
    })

app.listen('3000', () => {
    console.log('started');
});
    
function manageEmployees() {
inquirer.prompt([
    {   
        type: 'list',
        name: 'manage',
        message: 'what would you like to do',
        choices: ['add departments', 'add roles', 'add employees', 'view departments', 'view roles', 'view employees', 'update employee roles']
    }
]).then(function (answer) {
    switch (answer.userInput) {
        case 'add departments':
            addDepartment();
            break;

        case 'add roles':
            addRole();
            break;

        case 'add employees':
            addEmployee();
            break;

        case 'view departments':
            viewDepartment();
            break;
        
        case 'view roles':
            viewRole();
            break;
            
        case 'view employees':
            viewEmployee();
            break;

        case 'update employee roles':
            updateRole();
            break;

    }
})
}

addDepartment(){

}

addRole(){

}

addEmployee(){

}

viewDepartment(){
    console.table("Selecting");
    Connection.query("select * From department", function(err, res) {
        if (err) throw err;
        console.table(res);
        Connection.end();
    });
}

viewRole(){
    console.table("Selecting");
    Connection.query("select * From department", function(err, res) {
        if (err) throw err;
        console.table(res);
        Connection.end();
    });
}

viewEmployee(){
    console.table("Selecting");
    Connection.query("select * From department", function(err, res) {
        if (err) throw err;
        console.table(res);
        Connection.end();
    });
}

updateRole(){

}



