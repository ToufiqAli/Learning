
const express = require('express');
const cors = require('cors');
const ConnectDB = require('./config/db');



const userRoutes = require('./Routes/user.route');
const categoryRoutes = require ('./Routes/category.route');
const productRoutes = require('./Routes/products.route');




ConnectDB()

const app = express();
app.get('/',(req,res)=>{
    res.status(200).json({
        message : "This Is UR Server Running .....",
    })
})

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/category', categoryRoutes)
app.use('/products',productRoutes);



module.exports = app;