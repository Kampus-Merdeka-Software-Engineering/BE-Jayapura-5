const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// products router
const productsRouter = require('./routes/products');
const dbConnection = require('./model/dbConnection');
const userRouter = require('./routes/users');
// agar dapat mengakses folder public
// app.use(express.static('static'));
app.use(express.urlencoded({
  extended: false
})); //supaya dapat menerima body
// seting data json
app.use(express.json());
app.use(cors());
app.use('/checkout', productsRouter);
app.use('/registration', userRouter.registration);
app.use('/login', userRouter.login);
app.listen(5001, () => {
  console.log('App listening on port 5001');
  dbConnection.authenticate().then(() => {
    console.log('database terhubung')
  }).catch((err) => {
    console.log('terjadi error saat koneksi ke database', err)
    process.exit()
  })
});