const EmployeeController = require('../Controllers/employee.controller');
const router = require('express').Router();

router.get('/',EmployeeController.getAllEmployees);
router.post('/create',EmployeeController.CreateEmployee);




module.exports = router;