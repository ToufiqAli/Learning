// This is ur Database MongooseDB or SQL DB

const users = require ('../model/user')


// Controller functions
const getAllProducts = (req, res) =>{
    if(!Products){
        res.status(404).json({
            Status : "Not Found",
            message : "No Products Found"

        })
    }
        else{
            res.status(200).json({
                Status : "Success",
                data : Products
            })


        }
}

const getAllUsers = async (req, res) => {
    // 1. Change the result variable name to allUsers
    // 2. Ensure your model name matches your import (e.g., User)
    const allUsers = await users.find(); 
    
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

    const existinguser = await users.findOne({email})
    if(existinguser)
    {
    return res.status(400).json({ message: 'User with this username already exists for this application' });
    }
  const user = await users.create({
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
     res.status(201).json({ message: 'User created successfully', users });

}catch(error){
     console.error("Error in createUser:", error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message, stack: error.stack });
    }



}
























const fetchoneuser = async (req, res) => {
// 1. Destructure the ID from request parameters
const { username } = req.params;

// 2. Capitalize and use the correct Model name (User)
// 3. Keep the output variable lowercase (user)
const user = await users.findOne({ username });




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


const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, age} = req.body;
    const user = users[`user${id}`];

    if(!user){
        res.status(404).json({
            Status : "Failed",
            message : "User not found"
        })
    }
    else{
        if(name){
            user.name = name;
            user.age = age;
        }
        res.status(200).json({
            Status : "Success",
            data : users
        })
    }
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    const user =users[`user${id}`];
    if(!user){
        res.status(404).json({
            Status : "Failed",
            message : "User not found"
        })
    }
    else{
        delete users[`user${id}`];
        res.status(200).json({
            Status : "Success",
            data : users
        })
    }}








module.exports = {
   getAllProducts,
   getAllUsers,
    createUser,
    fetchoneuser,
    updateUser,
    deleteUser
}