const userSchema = require('../Model/user');
const crypto = require('crypto');

class userServices{

    async getAllUsers(){
        const users = await userSchema.find({});
        return users
    }

    async createUser(userdata){
        try{
        userdata.customerId = `CTM_${crypto.randomBytes(4).toString('hex')}`;
        const users = await userSchema.find({username: userdata.username} && {email : userdata.email} && {phoneNumber : userdata.phoneNumber});
         }catch(error){
            return error
         } if(!users){
            const user = await userSchema.create(userdata);
            return user
        }
    }

}

module.exports = new userServices;