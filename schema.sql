-- create database
create database employee;
use employee;

-- Create table  
create table employees
(
id int auto_increment,
First_name varchar(30) not null,
Last_name varchar(30) not null,
role_id int not null,
manager_id int,
primary key(id)
);

create table department
(
id int auto_increment,
name varchar(30) unique not null,
primary key(id)
);

create table role
(
id int auto_increment,
title varchar(30) unique not null,
salary decimal not null	,
department_id int not null,
primary key(id)
);

