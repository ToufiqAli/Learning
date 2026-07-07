const User = require ('../model/user')

const getAllUsers = async (req, res) => {
    // 1. Change the result variable name to allUsers
    // 2. Ensure your model name matches your import (e.g., User)
    const allUsers = await User.find(); 
    
    res.status(200).json({
        status: "Success",
        users: allUsers
    });
};

const createUser = async (req, res) => {
   const { 
            Name, 
            username, 
            password, 
            email, 
            country, 
            state, 
            city, 
            area, 
            Phoneno, 
            status, 
            wishlist, 
            Orders, 
            Notifications, 
            orderhistory 
        } = req.body;
try{

    const existinguser = await User.findOne({email})
    if(existinguser)
    {
    return res.status(400).json({ message: 'User with this username already exists for this application' });
    }
  const user = await User.create({
            Name: {
                Fristname:Name.Fristname,
                LastName:Name.LastName
            },
            username,
            password, // Note: Consider changing this to String in your schema to allow text/symbols
            email,
            location: {
                country,
                state,
                city,
                area
            },
            Phoneno,
            status,
            wishlist,         // Expects an array: [{ productid: "id" }]
            Orders,           // Expects an array: [{ productid: "id" }]
            Notifications,    // Expects an array of strings: ["msg1", "msg2"]
            orderhistory      // Expects an array: [{ productid: "id" }]
        });

    user.save();
     res.status(201).json({ message: 'User created successfully', user });

}catch(error){
     console.error("Error in createUser:", error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message, stack: error.stack });
    }

}




const fetchoneuser = async (req, res) => {
const { username } = req.params;
const user = await User.findOne({ username });


    if(!user){
        res.status(404).json({
            Status : "Failed",
            message : "User not found"
        })
    
    }else{
        res.status(200).json({
            Status : "Success",
             user
        })
    }

}


const updateUser = async (req, res) => {
    try {
        const username = req.params;
        
        // 1. Safely extract all variables from req.body
        const data = req.body;

        // 2. Build the updated fields object safely
        const updateData = {

            password,
            email,
            username,
            Phoneno,
            status,
            wishlist,
            Orders,
            Notifications,
            orderhistory,
            // Rebuild nested fields only if they exist in the incoming request
            ...(Name && { Name: { Fristname: Name.Fristname, LastName: Name.LastName } }),
            ...((country || state || city || area) && {
                location: { country, state, city, area }
            })
        };

        // 3. Find and update using the correct capitalized Model name (User)
        // { new: true } returns the updated document, { runValidators: true } keeps database rules active
        const updatedUser = await User.findOneAndUpdate(
            { username }, 
            { $set: updateData }, 
            { new: true, runValidators: true }
        );

        // 4. Return an error if the user profile wasn't found
        if (!updatedUser) {
            return res.status(404).json({
                Status: "Failed",
                message: "User not found"
            });
        }

        // 5. Send back the updated document data
        res.status(200).json({ 
            Status: "Success",
            message: 'User Updated successfully', 
            user: updatedUser 
        });

    } catch (error) {
        res.status(400).json({
            Status: "Failed",
            message: error.message
        });
    }
};


const deleteUser = async (req, res) => {
    const {username} = req.params;
    const user = await User.findOneAndDelete({username})

    if(!user){
        res.status(404).json({
            Status : "Failed",
            message : "User not found"
        })
    }
    else{
        res.status(200).json({
            Status : "Success",
            message : "User has Been Deleted"
        })
        
    }}


module.exports = {
   getAllUsers,
    createUser,
    fetchoneuser,
    updateUser,
    deleteUser
}