// Declaring global variables
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Xanderlav9731",
    database: "burgers_db"
});

// Establishing DB connection 
connection.connect(function(err) {
    if(err){
    console.error("Error connecting " + err.stack);
    return;
    }
    console.log(`Connected as ID ${connection.threadId}`);
});

module.exports = connection;