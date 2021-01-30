# employee-tracker
Architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

<br>

==========

## Create tables using mysql tables

```
DROP DATABASE IF EXISTS employee
create database employee;
use employee;

-- Create table  
create table employees
(
id int auto_increment not null,
First_name varchar(30) not null,
Last_name varchar(30) not null,
role_id int not null,
manager_id int not null,
primary key(id)
);


```
<br>

## Add Inquirer Prompts

```
inquirer.prompt([
    {   
        type: 'list',
        name: 'manage',
        message: 'what would you like to do',
        choices: ['add departments', 'add roles', 'add employees', 'view departments', 'view roles', 'view employees', 'update employee roles']
```
<br>

## View existing tables

```
function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res);
        manageEmployees()
 })};
```

<br>

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node]
* [Mysql]


## Deployed Link

* [See Walk Through](https://drive.google.com/file/d/1eR0zT-F6Htz8KhhYQt19EksU9TUQCGGF/view)

## License

This project is licensed under the MIT License 

## Prerequisites

Git hub,
Git lab,
Git bash,
Visual studio,
Google chrome,
Bootstrap,
JavaScript
Node
mysql
## Authors

**Jasmine Franklin C: 301-332-2313 E: jasminer.franklin@gmail** 

- [Link to Portfolio Site](https://jas-f.github.io/responsive-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>

