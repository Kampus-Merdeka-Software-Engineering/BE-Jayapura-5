const Sequelize = require('sequelize');
const mysql = require('mysql2');

const dbConection = new Sequelize('defaultdb', 'avnadmin', 'AVNS_ygsHPz88EYsfI7u_6c8', {
    host : 'mysql-30d594f3-fitririzkyamellia197-b48f.aivencloud.com',
    dialect : 'mysql',
    port: 20160
});
module.exports = dbConection;