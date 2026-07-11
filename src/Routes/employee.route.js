const EmployeeController = require('../Controllers/employee.controller');
const router = require('express').Router();

router.get('/',EmployeeController.getAllEmployees);
router.get('/:employeeId',EmployeeController.getOneEmployees);
router.post('/create',EmployeeController.CreateEmployee);




module.exports = router;