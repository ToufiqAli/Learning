const categoryServices = require ('../Services/CategoryServices');


class categoryController{

    async createCategory(req,res,next){
        try{
        const Category = await categoryServices.createCategory(req.body);
        res.status(200).json({
            Status : "Success",
            Category
        })
        }catch(error){
        next(error);
        }

    }

    async getAllCategory(req,res,next){
          try{
        const Categories = await categoryServices.getAllCategory();
        res.status(200).json({
            Status : "Success",
            Categories
        })
        }catch(error){
        next(error);
        }

    }
        async GetCategory(req,res,next){
          try{
        const Category = await categoryServices.GetCategory(req.params);
        res.status(200).json({
            Status : "Success",
          Category
        })
        }catch(error){
        next(error);
        }

    }
    async UpdateCategory(req,res,next){
        try{
        const Category = await categoryServices.UpdateCategory(req.params,req.body);
        res.status(200).json({
            Status : "Success",
            Category
        })
        }catch(error){
        next(error);
        }

    }

    async DeleteCategory(req,res,next){
        try{
        const data = await categoryServices.DeleteCategory(req.params);
        res.status(200).json({
            Status : "Success",
            Message: "The Category Has Been Deleted Successfully"
        })
        }catch(error){
        next(error);
        }

    }
    async DeleteAllCategories(req,res,next){
        try{
        const data = await categoryServices.DeleteAllCategories();
        res.status(200).json({
            Status : "Success",
            Message: "The Categories Has Been Deleted Successfully"
        })
        }catch(error){
        next(error);
        }

    }






}

module.exports = new categoryController();