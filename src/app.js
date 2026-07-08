// npm init -y initialize a new Node.js project
// npm install Express mongoose dotenv





const express = require('express');
const cors = require('cors');
const ConnectDB = require('./config/db');
const app = express();
const userRoutes = require('./Routes/user.route');
const ProductRoutes = require('./Routes/products.route');

ConnectDB();

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/products',ProductRoutes);



module.exports = app;