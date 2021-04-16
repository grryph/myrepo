# MySQL Syntax Guide

![MySQL Image](http://scwebsrv-eleven.site/web108/challenges/mysql.png)

## How to log in to MySQL with Terminal or CMD

> mysql -u root -p;

Remember to replace 'root' with whatever user you are attempting to sign in with.
After running this command, you will be asked to enter your MySQL password that you created during the install.

**_Also note that 'sudo' may need to be used to begin this or other commands if root permissions are not granted._**

## How to "SHOW USERS"

In order to show all MySQL users, we must run the following queries:

> SELECT user FROM mysql.user;

This first query selects the 'user' table from the 'mysql' database.

This command may only be run if accessed by an administrator:

> mysql -u root -p
Enter password: ***********
mysql> use mysql;
Database changed
mysql> SELECT user FROM user;

Running this command will display all users as rows inside the 'user' column:

> +-----------+
| user      |
+-----------+
| mysql.sys |
| mysqlxsys |
| root      |
+-----------+
3 rows in set (0.00 sec)

## How to "CREATE USERS", "GRANT" and "REVOKE" privileges and "DROP" users

First, this command will need to be run from MySQL command line:

> CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

**Be sure to change 'username' and 'password' to whatever you wish these fields to be.**

Now, we need to give this new user permissions as currently it will not even be able to log in. 
Once we have the new user created, we can run this command to grant ALL PERMISSIONS to this user:

> GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';

While this is quick and easy, it may be undesriable as giving a user fully admin access to your database is a security concern. Instead, it would be wise to add specific permissions to specific users. Here is a list of permissions we may grant to users:

>
    ALL PRIVILEGES- as we saw previously, this would allow a MySQL user full access to a designated database (or if no database is selected, global access across the system)
    CREATE- allows them to create new tables or databases
    DROP- allows them to them to delete tables or databases
    DELETE- allows them to delete rows from tables
    INSERT- allows them to insert rows into tables
    SELECT- allows them to use the SELECT command to read through databases
    UPDATE- allow them to update table rows
    GRANT OPTION- allows them to grant or remove other users’ privileges


With these options in mind, here is an example of how to use this in a query:

> GRANT type_of_permission ON database_name.table_name TO 'username'@'localhost';

These permissions may also be revoked in similar fashion:

> REVOKE type_of_permission ON database_name.table_name FROM 'username'@'localhost';

To check a user's current permissions, run this:

> SHOW GRANTS FOR 'username'@'localhost';

To delete a user, you can use the 'DROP' command as you would with databases/tables:

> DROP USER 'username'@'localhost';

## How to "SHOW", "DELETE", "CREATE", and "SELECT" databases

To **show all databases** in MySQL, simply run this query while logged into MySQL:

> SHOW DATABASES;

This should return you a table populated with all of the databases you have created.

To **delete a specific database**, use this query instead:

> DROP DATABASE databasename;

**BE VERY CAREFUL AS THIS WILL DELETE EVERYTHING INSIDE THE DATABASE!**

To **create a database**, simply run the following:

> CREATE DATABASE databasename;

...and the database is created!

Finally, to **select a database for use**, use the "USE" commands as follows:

> USE databasename;

All edits made will now affect the selected database. This **must** be initiated every time you wish to make changes to a database, **OR** specified within the query.

## How to create a "TABLE" with columns and data types

**To create a table**, we use the following syntax:

> CREATE TABLE tablename (
> column_name DATATYPE,
> column_name DATATYPE,
> column_name DATATYPE
> );

**Example**:

> CREATE TABLE testtable (
> name VARCHAR(255),
> age INT,
> gender VARCHAR(255)
> );

**Example without 'USE database'**:

> CREATE TABLE firstdatabase . test1 (
> name VARCHAR(255),
> age INT
> );

_** Note ** the **concantenation of the database name ( firstdatabase ) with the table name** ( test1 )_


## How to "SHOW", "DELETE", and "DROP" tables

The syntax for working with tables in MySQL is quite easy to understand. 

First, **run the following to 'SHOW' tables** in a MySQL database:

> SHOW TABLES;

_** Note ** you must already have ran the **"USE databasename;"** command so MySQL knows where to look for tables_

This will display all of the tables inside the selected database. 

**To 'DROP' (delete) a table, run this:**

> DROP TABLE tablename;

## How to insert rows ( single and multiple )

To **insert rows** into a table, we must of course first 'USE' the desired database. Next, we use the following syntax to insert:

> INSERT INTO tablename (column1, column2) 
> VALUES ('string', integer);

**Example:**

> INSERT INTO testtable (name, age)
> VALUES ('randy',56);

**Example while specifying DB**:

> INSERT INTO testdb . testtable (name, age)
> VALUES ('randy',56);

## How to 'SELECT' with the 'WHERE' clause 

The syntax for 'SELECT' with 'WHERE' is quite straightforward:

The following can be used when we want to **select from indivdual columns and filter with a 'WHERE' condition:**

> SELECT column1, column2 
> FROM tablename 
> WHERE condition;

The following can be used when we want to **select all from a table and filter with a 'WHERE' condition:**

> SELECT * FROM tablename 
> WHERE condition;

_** Note ** An asterisk ( * ) is the **universal symbol for SELECT ALL** in MySQL syntax._

The following can be used when we want to **select and then use a range wihtin our 'WHERE' statement:**

> SELECT * FROM tablename 
> WHERE columnname > 5000;

## How to 'DELETE' an individual row

Use the following code to **'DELETE' an individual row:**

> DELETE FROM tablename 
> WHERE condition;

 ** _Note ** that the 'WHERE' condition is optional and may be omitted, **HOWEVER** doing so will **delete everything in the specificed table.**_ 

**Example:**

> DELETE FROM firstdatabase 
> WHERE age = 56;

## How to 'UPDATE' a row

To **update a row**, use the following syntax:

> UPDATE tablename
> SET columnname = value,
> columnname2 = value
> WHERE condition;

**Example**:

> UPDATE test1
> SET age = 60,
name = 'Rick'
> WHERE name = 'Ricky';

## How to add a new column and modify it

First, the following code is used to **add a new column to your table:**

> ALTER TABLE tablename
> ADD columnname datatype;

** _Note ** that the table name must also be specified._

And finally, here is how we **modify a column:**

> ALTER TABLE tablename
> MODIFY columnname datatype;

** **BONUS** ** How to **delete a column:**

> ALTER TABLE testtable 
> DROP COLUMN columnname;

**Example:**

> ALTER TABLE test1
> MODIFY age varchar(255);

## How to 'ORDER BY' and use 'DISTINCT'

If you wish to **order returned data**, you can use 'ORDER BY' to do so:

> SELECT column1, column2 
> FROM tablename 
> ORDER BY column1 ASC|DESC;

**ASC** and **DESC** stand for **ascending** and **descending** respectively. 

**Example:**

> SELECT * 
> // NOTE the use of an asterisk to 'SELECT ALL' columns from the table
> FROM test1 
> ORDER BY age ASC;

If you wish to **show only unique returned data, use 'DISTINCT':**

> SELECT DISTINCT column1, column2 FROM tablename;

**Example:**

> SELECT DISTINCT age, name FROM test1;

## How to concatenate columns

To concatenate columns, we **make use of 'CONCAT' in coordination with a 'SELECT' statement:**

> SELECT  CONCAT (column1, column2) 
> FROM tablename;

** _Note ** that the table name must also be specified._

**Example:**

> SELECT CONCAT (name,' ',age)
FROM test1; 

## How to use 'LIKE' to search

Use the following syntax to **search with 'LIKE':**

> SELECT column1, column2
> FROM tablename
> WHERE column1 
> LIKE pattern; 

All of this syntax should be familiar except for the **pattern.**

Here we use **LIKE operators** to further narrow our search.

> % The percent sign represents zero, one, or multiple characters
> _ The underscore represents a single character

**Example:**

> SELECT * 
> FROM test1
> WHERE age
> LIKE '5%';


## How to select using 'IN' or 'NOT IN' and 'BETWEEN'

The 'IN' clause can be used to **output data where a particular value exists:**

> SELECT column1, column2
> FROM tablename
> WHERE column1 
> IN (value1, value1);

**Example:**

> SELECT *
> FROM test1
> WHERE age
> IN (50,60);

The 'NOT IN' clause does the opposite, **outputting data where a value does NOT exist:**

**Example:**

> SELECT *
> FROM test1
> WHERE name
> NOT IN ('Randy','Lahey');

The 'BETWEEN' clause is used to **output data BETWEEN two stated values:**

**Example:**

> SELECT *
> FROM test1
> WHERE age
> BETWEEN (10,100);

## How to create and remove indexes

The syntax to **create a index** is quite simple:

> CREATE INDEX indexname
> ON tablename (columnn1, column2);

**Example:**

> CREATE INDEX nameidx
> ON test1 (name);

Additionally, the syntax to **remove an index** is also straightforward:

> ALTER TABLE tablename
> DROP INDED indexname;

## Primary and Foreign Keys

**Primary Keys** and **Foreign Keys** are used within MySQL to relate information between tables.

Here is a demonstration of how two tables work together in a **one to many relationship:**

>CREATE TABLE rooms (
roomID INT AUTO_INCREMENT NOT NULL, 
roomNumber INT NOT NULL,
queenBeds INT,
kingBeds INT,
doubleBeds INT,
roomCapacity INT NOT NULL,
petsAllowed ENUM('Yes','No') NOT NULL,
roomRate INT NOT NULL,
roomDesc VARCHAR(255) NOT NULL,
PRIMARY KEY (roomID)
);

>CREATE TABLE reservations (
reserveID INT AUTO_INCREMENT NOT NULL,
roomID INT NOT NULL,
guestID INT NOT NULL, 
guestLastname VARCHAR(255) NOT NULL,
roomNumber INT NOT NULL, 
reserveDate DATE,
PRIMARY  KEY (reserveID),
FOREIGN KEY (roomID) REFERENCES rooms(roomID),
FOREIGN KEY (roomNumber) REFERENCES rooms(roomNumber),
FOREIGN KEY (guestLastname) REFERENCES guest(guestLastname),
FOREIGN KEY (guestID) REFERENCES guests(guestID)
);

Here, a **one to many** relationship is shown between **rooms** and **reservations**.
**One** room may have **many** reservations. The data is related using **Foreign Keys.**

## How to use inner join

An **inner join** may be used to **combine rows of data based on a related column.**
Here is the syntax for an **inner join** in MySQL:

> SELECT table1.column1, table2.column2
FROM table1
INNER JOIN table2
ON table1.commonfield = table2.commonfield;

**Example:**

> SELECT orders.OID, clients.CustomerID
FROM clients
INNER JOIN orders
ON clients.OID = orders.CustomerID;









 
