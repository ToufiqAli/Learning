const employeeModel = require('../model/Employee');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

class EmployeeServices{


    async CreateEmployee(data){
        const employeeId = `EMP${crypto.randomBytes(4).toString('hex')}`;
        console.log(data.username)

        const Existingemployee = await employeeModel.findOne({username:data.username});
        if(Existingemployee){
            throw new Error("The Username Employee is Already Present")
        }else{
            data.password = await bcrypt.hash(data.password,10)
            const newEmployee = await employeeModel.create(data);
            return newEmployee;
        }


    }
    async LoginEmployee(data){
        const employee = await employeeModel.findOne({username:data.username}).select('+password');;
        console.log(employee);
       const password = await employee.comparePassword(data.password)
        if(!password){
            throw new Error ("Incorrect Username or Password");
        }
        else{
           return employee
           
        }
    }
    async getOneEmployees(employeeId){
        const employee = await employeeModel.findOne({_id:employeeId.employeeId});
        return employee
    }

    async getAllEmployees(){
        const employee = await employeeModel.find({});
        return employee
    }





}

module.exports = new EmployeeServices;