const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect();

const user = { username: 'exampleUser', email: 'user@example.com', hashed_password: 'hashed_password_here' };

connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    if (error) throw error;
    console.log('User ID:', results.insertId);
});

connection.end();
