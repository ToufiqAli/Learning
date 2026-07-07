// Router()
// Listen()
// Use()


const router = require('express').Router();
const user = require('../Controllers/user.controller');





// router.get('/', user.getAllProducts);



router.get('/abc', user.getAllUsers);
router.post('/create/', user.createUser);

// localhost:5000/users/


// request >> route through this url
// localhost:5000/users/abc

// url will fetch the present users

// dynamic routing 

// route body 

// new user 
// name : shagufta 
// age : 20











router.get('/:id', user.fetchoneuser);
// router.put('/:id', user.updateUser);
// router.delete('/:id', user.deleteUser);

module.exports = router;

