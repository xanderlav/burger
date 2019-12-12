// Declaring global variables & dependencies
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    user: "root",
    host: "localhost",
    password: "Xanderlav9731",
    database: "burgers_db"
});

// Establishing DB connection 
connection.connect(function(err) {
    if(err){
    console.error(` Error connecting  ${err.stack}`);
    return;
    }
    console.log(` Connected as ID ${connection.threadId}`);
});

// Export connection for ORM to use.
module.exports = connection;