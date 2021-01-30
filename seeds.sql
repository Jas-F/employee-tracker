INSERT INTO department (name) values ('Accounting');
-- INSERT INTO department (name) values ('Payroll');
-- INSERT INTO department (name) values ('Sales');
-- INSERT INTO department (name) values ('IT');

INSERT INTO role (title, salary, department_id) values ("CPA", 75000, 2);
-- INSERT INTO role (title, salary, department_id) values ('Accountant, 75,000, Accounting');
-- INSERT INTO role (title, salary, department_id) values ('Sales Person, 50,000, Sales');
-- INSERT INTO role (title, salary, department_id) values ('Engineer, 100,000, IT');

INSERT INTO employees (First_name, Last_name, role_id, manager_id) values ("Mark", "Cuban", 6, 15);
-- INSERT INTO employee (First_name, Last_name, role_id, manager_id) values ('Robert, Kiyosaki, Accountant, 3');
-- INSERT INTO employee (First_name, Last_name, role_id, manager_id) values ('Pam, Oliver, Sales, 7');
-- INSERT INTO employee (First_name, Last_name, role_id, manager_id) values ('Jasmine, Franklin, Engineer, 21');
