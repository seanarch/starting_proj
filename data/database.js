const mysql = require('mysql2/promise');

mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: 'password'
});

module.exports = pool;