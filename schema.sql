-- create database
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

create table department
(
id int auto_increment not null,
name varchar(30) not null,
primary key(id)
);

create table role
(
id int auto_increment not null,
title varchar(30) unique not null,
salary decimal(10.3) null,
department_id int not null,
primary key(id)
);

