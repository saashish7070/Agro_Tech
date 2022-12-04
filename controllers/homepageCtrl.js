const Product = require('../models/productModel')
const Category = require('../models/categoryModel')
class APIfeatures{
    constructor(query,queryString){
        this.query = query
        this.queryString = queryString                
    }

    pagination(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page-1)*limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}


const homepage = {
getItems: async(req,res)=>{
        try{
           const category = Category.find({}) 
           const features = new APIfeatures(Product.find({}),req.query) 
           const products = await features.query.sort('-createdAt')
           .populate('seller')

           res.json({
            msg: 'Success',
            result: products.length,
            products,category
           })
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = homepage

