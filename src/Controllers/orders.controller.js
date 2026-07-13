const orderservice = require ('../Services/order.service');
const customer = require('../model/user')



class OrderController{
    async orderCreate(req,res,next){
        try{
        const orderdata = req.body;
        const validcustomer = await customer.find({customer:orderdata.customer});
        if(!validcustomer){
            res.status(404).json({
                status : "Failed",
                message : "Not An Valid User"
            })
        }
        else{
            const order = orderservice.createorder(orderdata);
            res.status(200).json({
                status : "Success",
                order
            })

        }
    }catch(error){
        next(error);
    }


    }
}