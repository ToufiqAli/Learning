const EmployeeController = require('../Controllers/employee.controller');
const router = require('express').Router();

router.get('/',EmployeeController.getAllEmployees);
router.get('/:employeeId',EmployeeController.getOneEmployees);
router.post('/create',EmployeeController.CreateEmployee);
router.post('/login',EmployeeController.LoginEmployee);




module.exports = router;