const categoryServices = require ('../Services/categoryServices');


class categoryController{

    async createCategory(req,res,next){
        try{
        const data = await categoryServices.createCategory(req.body);
        res.status(200).json({
            Status : "Success",
            Category: data
        })
    }catch(error){
        next(error);
    }

}}

module.exports = new categoryController();