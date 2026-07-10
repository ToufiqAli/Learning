
const express = require('express');
const cors = require('cors');
const ConnectDB = require('./config/db');
const dotenv = require('dotenv');


const userRoutes = require('./Routes/user.route');
const categoryRoutes = require ('./Routes/category.route');
const productRoutes = require('./Routes/products.route');

dotenv.config();

ConnectDB();


const app = express();


app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).json({
        message : "This Is UR Server Running .....",
        PORT : `The Server is Running on ${process.env.PORT}`
    })
})
app.use('/users', userRoutes);
app.use('/category', categoryRoutes)
app.use('/products',productRoutes);



module.exports = app;