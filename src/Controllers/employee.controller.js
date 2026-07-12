const employeeServices = require ('../Services/employee.service');

class EmployeeController{

    async getAllEmployees(req,res,next){
        try{
            const Employees = await employeeServices.getAllEmployees();
            if(!Employees){
                res.status(404).json({
                    status : "Not Found",
                    message: "Employees are not There "
                })
            }else{
                res.status(200).json({
                    status: "Success",
                    Employees
                })
            }
        }catch(error){
            next(error)
        }
    }
    async getOneEmployees(req,res,next){
        try{
            const Employee = await employeeServices.getOneEmployees(req.params);
            if(!Employee){
                res.status(404).json({
                    status : "Not Found",
                    message: "Employees are not There "
                })
            }else{
                res.status(200).json({
                    status: "Success",
                    Employee
                })
            }
        }catch(error){
            next(error)
        }
    }
       async CreateEmployee(req,res,next){
        try{
            const Employee = await employeeServices.CreateEmployee(req.body);
            if(!Employee){
                res.status(404).json({
                    status : "Failed",
                    message: Employee
                })
            }else{
                res.status(200).json({
                    status: "Success",
                    Employee
                })
            }
        }catch(error){
            next(error)
        }
    }
     async LoginEmployee(req,res,next){
        try{
            const Employee = await employeeServices.LoginEmployee(req.body);
            if(!Employee){
                res.status(404).json({
                    status : "Failed",
                    message: Employee
                })
            }else{
                res.status(200).json({
                    status: "Success",
                    Employee
                })
            }
        }catch(error){
            next(error)
        }
    }




}
module.exports = new EmployeeController;