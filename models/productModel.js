const mongoose = require('mongoose')

const product = {
    name:{
        type: String,
        required : true,
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number
    },
    status:{
        type: Array,
        required: true
    },
    seller:{
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    buyer: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    discount: {
        type: Number
    },
    rating: {
        type: Number
    },
    averageRate: {
        type: Number
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Array,
        required: false
    },
    comment: [{
        type: mongoose.Types.ObjectId,
        ref: 'reviews'
    }]
}

const productSchema = new mongoose.Schema(product,{
    timestamps: true
})


module.exports = mongoose.model('product',productSchema)