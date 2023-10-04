const dbConection = require('./dbConnection');
const sequelize = require('sequelize');

// nama tabel database
const checkOut = dbConection.define("checkout", {
    id: {
        type: sequelize.DataTypes.INTEGER, primaryKey: true},
    produc_name: {
        type: sequelize.DataTypes.STRING},
    price: {
        type: sequelize.DataTypes.STRING},
    name: {
        type: sequelize.DataTypes.STRING},
    addres: {
        type: sequelize.DataTypes.TEXT},
    phone_number : {
        type: sequelize.DataTypes.STRING},
    payment_method : {
        type: sequelize.DataTypes.STRING},
    shipping_method : {
        type: sequelize.DataTypes.STRING}
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = checkOut;