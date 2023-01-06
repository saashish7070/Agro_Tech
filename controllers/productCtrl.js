const Product = require('../models/productModel')
const User = require('../models/userModel')
// const Category = require('../models/categoryModel')


const product = {
    detailProduct: async (req,res) => {
        try{
            const productId = req.params.id;
            const product = await Product.findById(productId);

            res.json({
                msg: 'Detail of Products',
                product
            })
        }
        catch(err){
            return res.status(500).json({msg: 'Unsuccessful to retrieve data'})
        }
    },
    createProduct: async(req,res)=>{
        try{
            const {name,price,quantity,status} = req.body;
            const sellId = req.params.id;
            const newProduct = new Product({
                name,price,quantity,status,seller: sellId
            })
            await newProduct.save();

            res.status(200).json({
                msg: 'Product saved!',
                newProduct
            })

            await User.findOneAndUpdate({_id: req.params.id},{
                $push: {sellItem : newProduct}
            },{new: true})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async(req,res)=>{
        try{
            const productId = req.params.id;
            const userId = req.params.id;
            const {name,price,category,quantity,status,discount} = req.body;
            const newProduct = await Product.findByIdAndUpdate(productId,{
                name, price, category, quantity , status, discount, seller:userId
            })
            await User.findOneAndUpdate({_id: req.user._id},{
                $push: {sellItem: newProduct}
            })
        }catch(err){
            res.status(500).json({msg: err.message})
        }
    },

}

module.exports = product