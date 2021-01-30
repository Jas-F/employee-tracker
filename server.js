const mysql = require("mysql");
const inquirer = require('inquirer');
const Table = require('cli-table');
// create connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employee"
});

connection.connect(function (err) {
    if (err) throw err;
});

// app.listen('3000', () => {
//     console.log('started');
// });
    
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

// function addDepartment(){
//         inquirer.prompt([{
//         name: "newDepartment",
//         message: "what department would you like to add",
//     }]).then(function(answers){
//         connection.query("INSERT INTO department", {
//             name: answers.newDepartment,
//         })
//     })
// }

// function addRole(){
//     inquirer.prompt([{
//         name: "newDepartment",
//         message: "what department would you like to add",
//     }]).then(function(answers){
//         connection.query("INSERT INTO roles", {
//             name: answers.newDepartment,
//         })
//     })
// }

// function addEmployee(){
//     inquirer.prompt([{
//         name: "newDepartment",
//         message: "what department would you like to add",
//     }]).then(function(answers){
//         connection.query("INSERT INTO employees", {
//             name: answers.newDepartment,
//         })
//     })
// }

// function viewDepartment(){
//     console.table("Selecting");
//     connection.query("select * From department", function(err, res) {
//         if (err) throw err;
//         console.table(res);
//         connection.end();
//     });
// }

// function viewRole(){
//     console.table("Selecting");
//     Connection.query("select * From roles", function(err, res) {
//         if (err) throw err;
//         console.table(res);
//         connection.end();
//     });
// }

function viewEmployee(){
    connection.query("SELECT * FROM employees", function (err, res) {

        var table = new Table({
            //You can name these table heads chicken if you'd like. They are simply the headers for a table we're putting our data in
            head: ["id", "First_name", "Last_name", "role_id", "manager_id"],
            //These are just the width of the columns. Only mess with these if you want to change the cosmetics of our response
            colWidths: [10, 20, 15, 10, 10]
        });
    
        // table is an Array, so you can `push`, `unshift`, `splice`
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].id, res[i].First_name, res[i].Last_name, res[i].role_id, res[i].manager_id],
            );
        }
        console.log(table.toString());
        // restart()
    });
}


// function updateRole(){

//     inquirer.prompt([{
//         name: 'role',
//         type: 'list'
//     }]);
// }
manageEmployees()