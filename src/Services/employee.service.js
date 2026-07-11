const employeeModel = require('../model/Employee');
const crypto = require('crypto');

class EmployeeServices{


    async CreateEmployee(data){
        const employeeId = `EMP${crypto.randomBytes(4).toString('hex')}`;
        console.log(data.username)

        const Existingemployee = await employeeModel.findOne({username:data.username});
        if(Existingemployee){
            throw new Error("The Username Employee is Already Present")
        }else{
            const newEmployee = await employeeModel.create(data);
            return newEmployee;
        }


    }

    async getAllEmployees(){
        const employee = await employeeModel.find({});
        return employee
    }





}

module.exports = new EmployeeServices;