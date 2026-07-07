const router = require('express').Router();
const user = require('../Controllers/user.controller');



router.get('/', user.getAllUsers);
router.post('/create/', user.createUser);
router.get('/:username', user.fetchoneuser);
router.put('/:username', user.updateUser);
router.delete('/:username', user.deleteUser);

module.exports = router;

