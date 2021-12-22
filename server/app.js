var mysql = require('mysql');
const dbConfig = require("./app/config/db.config.js");

var connection = mysql.createConnection({
  host     : dbConfig.HOST,
  user     : dbConfig.USER,
  password : dbConfig.PASSWORD,
  port     : dbConfig.PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();