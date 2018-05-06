# burger

server.js:
-This uses node to create a server while on local host.
    Use command line to enter the parent folder of server.js and type:
        node server
    to run it.  If everything is working fine then you will get a console.log of the port in use.
-Also establishes the use of routes (actual routes created in burgers_controller.js), the use of handlebars, and the use of static elements such as CSS.

FOLDER: config
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

FOLDER: controllers
burgers_controller.js:
-Creates three routes for the program:
    1. "/" is a get route that will get all of the burgers' data from the database to be used to display all of them.
    2.  "/api/burgers" is a post route that lets the user add a burger to the display and database.
    3.  "/api/burgers/:id" is a put route that lets the user change devoured boolean to true.

FOLDER: db
schema.sql:
-This creates the database being used and the table being used.
-The table has ID auto-incrementing and unique, it also has a devoured column with a boolean default to false

seeds.sql:
-This creates some initial data to go in the table.

FOLDER: models
burger.js:
-Takes the generic orms created in orm.js and makes them specific to the burgers app.  It does not have everything plugged in because it needs to take in user input.

FOLDER: public
test.html:
subFOLDER: assets
    subFOLDER: css
    subFOLDER: img

FOLDER: views
index.handlebars:
-Creates the main handlebar file that will take in all the database info and make it displayable in the html body
subFOLDER: layouts:
    main.handlebars:
    -Creates the html head and takes in index.handlebars for the body

.gitignore:
-Because sometimes you don't want stuff posted to git.

package.json:
-Provides information about the npms used in the app.  To install same npms, go to the control panel and in the repository type "npm install" to install all needed npms.  The npms used are:
    express
    mysql
    express-handlebars
    body-parser
