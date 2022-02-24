create schema enterprise;
use enterprise;
create table if not exists Worker(
EMPLOYEE_ID int not null auto_increment primary key,
FIRST_NAME varchar(45) not null,
LAST_NAME varchar(45) not null,
SALARY bigint not null,
START_DATE date not null,
DEPARTMENT varchar(45) );

create table if not exists Bonus(
BONUS_ID int not null auto_increment primary key,
EMPLOYEE_REF_ID int not null,
foreign key (EMPLOYEE_REF_ID) references Worker(EMPLOYEE_ID),
BONUS_DATE date not null,
BONUS_AMOUNT bigint not null
);

create table if not exists Title(
TITLE_ID int not null auto_increment primary key,
EMPLOYEE_REF_ID int not null,
foreign key (EMPLOYEE_REF_ID) references Worker(EMPLOYEE_ID),
JOB_TITLE varchar(45) not null,
AFFECTED_FROM bigint
);

INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Monika','Arora',100000,'2014-02-20','HR');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Santiago','Carrillo',80000,'2014-06-11','Admin');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Ian','Smith',300000,'2014-02-20','HR');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Boyd','Ndonga',500000,'2014-02-20','Admin');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Vivek','Bhati',500000,'2014-06-11','Admin');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Elise','Guimares',200000,'2014-06-11','Account');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Barrack','Obama',75000,'2014-01-20','Account');
INSERT INTO Worker (FIRST_NAME, LAST_NAME,SALARY,START_DATE,DEPARTMENT) VALUES('Vivian','Muyu',90000,'2014-04-11','Admin');

INSERT INTO Bonus(EMPLOYEE_REF_ID,BONUS_DATE,BONUS_AMOUNT) VALUES (1,'2016-02-20',5000);
INSERT INTO Bonus(EMPLOYEE_REF_ID,BONUS_DATE,BONUS_AMOUNT) VALUES (2,'2016-06-11',3000);
INSERT INTO Bonus(EMPLOYEE_REF_ID,BONUS_DATE,BONUS_AMOUNT) VALUES (3,'2016-02-20',4000);
INSERT INTO Bonus(EMPLOYEE_REF_ID,BONUS_DATE,BONUS_AMOUNT) VALUES (1,'2016-02-20',4500);
INSERT INTO Bonus(EMPLOYEE_REF_ID,BONUS_DATE,BONUS_AMOUNT) VALUES (2,'2016-06-11',3500);

INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(1,'Manager',5000);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(2,'Executive',3000);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(8,'Executive',4000);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(5,'Manager',4500);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(4,'Asst. Manager',3500);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(7,'Executive',4000);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(6,'Lead',4500);
INSERT INTO Title(EMPLOYEE_REF_ID,JOB_TITLE,AFFECTED_FROM) VALUES(3,'Lead',3500);