const userSchema = require('../model/user');
const crypto = require('crypto');

class userServices{

    async getAllUsers(){
        const users = await userSchema.find({});
        return users
    }

    async createUser(userdata){
        try{
        userdata.customerId = `CTM_${crypto.randomBytes(4).toString('hex')}`;
        const users = await userSchema.find({
        username: userdata.username,
        email: userdata.email,
        phoneNumber: userdata.phoneNumber
        });

        if(users ){
            console.log(users);
            throw new Error("The User Already exists");
        }else{

            const user = await userSchema.create(userdata);
            return user
        }
        

         }catch(error){
            return error
         } 
    }

}

module.exports = new userServices;