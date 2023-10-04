const Sequelize = require('sequelize');
const mysql = require('mysql2');

const dbConection = new Sequelize('djour', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});
module.exports = dbConection;