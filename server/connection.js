const mysql = require('mysql2');
const dbConfig = require("./app/config/db.config.js");

const dbConnection = mysql.createConnection({
    host     : dbConfig.HOST,
    user     : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : 'followers_db',
    port     : dbConfig.PORT
});

dbConnection.connect(function (error) {
    if (error) {
        console.log(`Connect failed: ${error}`);
        throw error;
    }
    console.log('Connected to database');
});

/*
(async function() {
    try {
        connection = await mysql.createConnection({
            host     : dbConfig.HOST,
            user     : dbConfig.USER,
            password : dbConfig.PASSWORD,
            database : 'followers_db',
            port     : dbConfig.PORT
        });
    } catch (err) {
        console.error(`Database connection failed: ${err.stack}`);
        return;
    }

    console.log('Connected to database.');
    console.log('connected as id ' + connection.threadId);

    try {
        const [rows, fields] = await connection.execute('SELECT * from `test_app_control`');

        console.log(`Results: ${JSON.stringify(rows, null, 2)}`);
        // console.log(`Fields: ${JSON.stringify(fields, null, 2)}`);
    } catch(error) {
        console.error(`Error: ${JSON.stringify(error, null, 2)}`);
        connection.end();
    }    
})();
*/

module.exports = dbConnection;

