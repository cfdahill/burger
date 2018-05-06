//connect node to mysql and export this

var mysql = require("mysql")

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "3Bl!ndm!ce",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting to mysql: " + err.stack);
        return;
    }
    console.log("connected to mysql as " + connection.threadId);
});

module.exports = connection;