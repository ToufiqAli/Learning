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

    }

    async getAllCategory(req,res,next){
          try{
        const data = await categoryServices.getAllCategory();
        res.status(200).json({
            Status : "Success",
            Categorys: data
        })
        }catch(error){
        next(error);
        }

    }
        async GetCategory(req,res,next){
          try{
        const data = await categoryServices.GetCategory(req.body);
        res.status(200).json({
            Status : "Success",
            Category: data
        })
        }catch(error){
        next(error);
        }

    }






}

module.exports = new categoryController();