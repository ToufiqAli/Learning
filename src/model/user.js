const mongoose = require('mongoose');
const { type } = require('node:os');

const userScheme = new mongoose.Schema({
    Name:{
        Fristname:{
        type:String,
        required:true,
        },
        LastName:{
        type:String,
        required:true,
        }
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:Number,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        country:{
            type:String,


        },
        state:{
            type:String,

        },
        city:{
            type:String,

        },
        area:{
            type:String,

        }
    },
    Phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    status:{
        type:Boolean,

    },
   wishlist: [{
    productid: {
        type: String
    }
}],
   Orders: [{
    productid: {
        type: String
    },
}],
Notifications:[{
    type:String
}],
orderhistory:[{
        productid: {
        type: String
    },
}]

});

module.exports = mongoose.model("users", userScheme);