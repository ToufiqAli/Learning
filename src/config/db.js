const mongoose = require ('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const ConnectDB = async () =>{
    try{
        // Add this line where you set up your mongoose connection configuration
    mongoose.set('autoIndex', true); 

    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`The DB is Connected To ${connect.connection.host}`);
    }catch(error){
        console.log(`${error}`);
    }
}

module.exports = ConnectDB;