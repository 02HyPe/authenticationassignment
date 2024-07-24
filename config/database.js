const mysql = require(`mysql2/promise`)
const dotenv = require('dotenv');
dotenv.config();
const mysqlPool = mysql.createPool({
    host : process.env.HOST,
    database : 'test',
    user : process.env.USER,
    password : process.env.PASSWORD
})


module.exports = mysqlPool