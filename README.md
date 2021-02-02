# employee-tracker
create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.
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

## Add to tables

```
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
```
<br>

## Create Unordered List

```
<ul>
      {{#each bookList}}
      {{#if finished}}
      {{> bookList/book-block finish=false}}
      {{/if}}
      {{/each}}
    </ul>
```

<br>

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node](https://nodejs.org/en/)
* [Mysql](https://www.mysql.com/)
* [NPMHandlebars](https://handlebarsjs.com/)


## Deployed Link

* [See Walk Through](https://drive.google.com/file/d/1EBszgNwq7ELFLu8ChNjBIlKkee-Gg-7_/view)

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
NMP Handlebars
## Authors

**Jasmine Franklin C: 301-332-2313 E: jasminer.franklin@gmail** 

- [Link to Portfolio Site](https://jas-f.github.io/responsive-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>

