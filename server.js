const mysql = require("mysql");
const inquirer = require('inquirer');
const Table = require('cli-table');
// create connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee"
});

connection.connect(function (err) {
    if (err) throw err;
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
    switch (answer.manage) {
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
            viewEmployees();
            break;

        case 'update employee roles':
            updateRoles();
            break;

    }
})
}


function addDepartment(){
    inquirer.prompt([{
        name: "newDepartment",
        message: "what department would you like to add"
    }]).then(function(answers){
        connection.query("INSERT INTO department SET ?", {
            name: answers.newDepartment,
        })
        manageEmployees()
    })
}

function addRole(){
    inquirer.prompt([{
        name: "title_",
        message: "what is the title of the role"
    },
    {
        name: "salary_",
        message: "what is the role salary"
    },
    {
        name: "department_",
        message: "what is the department id"
    }]).then(function(answers){
        connection.query("INSERT INTO role SET ?", {
            title: answers.title_,
            salary: answers.salary_,
            department_id: answers.department_,
        })
        manageEmployees()
    })
}

function addEmployee(){
    inquirer.prompt([{
        name: "first",
        message: "what is the first name"
    },
    {
        name: "last",
        message: "what is the last name",
    },
    {
        name: "roleid",
        message: "what is the role id",
    },
    {
        name: "managerid",
        message: "what is the manager id",
    
    }]).then(function(answers){
        connection.query("INSERT INTO employees SET ?", {
            First_name: answers.first,
            Last_name: answers.last,
            role_id: answers.roleid,
            manager_id: answers.managerid,
        })
            manageEmployees()
    })
}
// }

 function viewDepartment(){
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res);
        manageEmployees()
       
    });
}

function viewRole(){
    connection.query("select * From role", function(err, res) {
        if (err) throw err;
        console.table(res);
        manageEmployees()
     
    });
}

function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res);
        manageEmployees()
 })};

// function updateRole(){

//     inquirer.prompt([{
//         name: 'role',
//         type: 'list'
//     }]);
// }
manageEmployees()