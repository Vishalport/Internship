var mysql = require("mysql");

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"collage"
});

module.exports = conn;