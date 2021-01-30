const mysql = require("mysql");
const express = require("express");
const inquirer = require('inquirer');
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
    })
    
function manageEmployees() {
inquirer.prompt([
    {   
        type: 'list',
        name: 'manage'
        message: 'what would you like to do',
        choices: ['add departments', 'add roles', 'add employees', 'view departments', 'view roles', 'view employees', 'update employee roles']
    }
]).then(function (answer) {
    switch (answer.userInput) {
        case 'add employee':
            add();
            break;

        case 'add roles':
            add();
            break;

        case 'view departments':
            view();
            break;
        
        case 'view roles':
            view();
            break;
            
        case 'view employees':
            view();
            break;

        case 'update employee roles':
            update();
            break;

    }
})
}