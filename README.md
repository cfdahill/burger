# burger

server.js:
-This uses node to create a server while on local host.
    Use command line to enter the parent folder of server.js and type:
        node server
    to run it.  If everything is working fine then you will get a console.log of the port in use.
-Also establishes the use of routes (actual routes created in burgers_controller.js), the use of handlebars, and the use of static elements such as CSS.

SUBFOLDER: config
connection.js:
-Establishes a connection with the mysql database.
-A password is required, by default it will look for a .env file that is set up the following way:
    # MySQL password

    MYSQL_PW=[password]

orm.js:
-Establishes 3 orms to be used to use the mysql database.
    1.  Select all so the entire database can be shown/used
    2.  Update so a single row can be updated
    3.  Add row so new data can be added to the datatable
-Set up so that the specific table needs to be called each time.  This makes it so it can be used with other tables outside of this assignment.

SUBFOLDER: db
schema.sql:
-This creates the database being used and the table being used.
-The table has ID auto-incrementing and unique, it also has a devoured column with a boolean default to false

seeds.sql:
-This creates some initial data to go in the table.