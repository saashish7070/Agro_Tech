const Product = require('../models/productModel')
const User = require('../models/userModel')
const Category = require('../models/categoryModel')


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
            res.status(500).json({msg: 'Unsuccessful to retrieve data'})
        }
    }
}

module.exports = product