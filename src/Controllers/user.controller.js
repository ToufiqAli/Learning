const userServices = require ('../services/user.service')


class UserController{


    async getAllUsers(req, res,next){
        try {
            const users = await userServices.getAllUsers();
            if(!users){
                res.status(404).json({
                    status : "success",
                    message : "There Are No Any Customers"
                })
            }else{
                 res.status(404).json({
                    status : "success",
                   users
                })

            }

        }catch(error){
            next(error)
        }
    }

    async createUser(req, res , next ){
        try{
            const userdata = req.body;
            const user = await userServices.createUser();
            res.status(201).json({
                status : "success",
                user
            })
        }catch(error){
            next(error);
        }
    }


// const updateUser = async (req, res) => {
//     try {
//         const username = req.params;
        
//         // 1. Safely extract all variables from req.body
//         const data = req.body;

//         // 2. Build the updated fields object safely
//         const updateData = {

//             password,
//             email,
//             username,
//             Phoneno,
//             status,
//             wishlist,
//             Orders,
//             Notifications,
//             orderhistory,
//             // Rebuild nested fields only if they exist in the incoming request
//             ...(Name && { Name: { Fristname: Name.Fristname, LastName: Name.LastName } }),
//             ...((country || state || city || area) && {
//                 location: { country, state, city, area }
//             })
//         };

//         // 3. Find and update using the correct capitalized Model name (User)
//         // { new: true } returns the updated document, { runValidators: true } keeps database rules active
//         const updatedUser = await User.findOneAndUpdate(
//             { username }, 
//             { $set: updateData }, 
//             { new: true, runValidators: true }
//         );

//         // 4. Return an error if the user profile wasn't found
//         if (!updatedUser) {
//             return res.status(404).json({
//                 Status: "Failed",
//                 message: "User not found"
//             });
//         }

//         // 5. Send back the updated document data
//         res.status(200).json({ 
//             Status: "Success",
//             message: 'User Updated successfully', 
//             user: updatedUser 
//         });

//     } catch (error) {
//         res.status(400).json({
//             Status: "Failed",
//             message: error.message
//         });
//     }
// };


// const deleteUser = async (req, res) => {
//     const {username} = req.params;
//     const user = await User.findOneAndDelete({username})

//     if(!user){
//         res.status(404).json({
//             Status : "Failed",
//             message : "User not found"
//         })
//     }
//     else{
//         res.status(200).json({
//             Status : "Success",
//             message : "User has Been Deleted"
//         })
        
//     }}



}
module.exports = new UserController