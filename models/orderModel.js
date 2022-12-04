const mongoose = require('mongoose')

const order = {
    item: {type: mongoose.Types.ObjectId, ref: 'product'},
    quantity: {type: Number},
    category: {type: mongoose.Types.ObjectId, ref: 'category'},
    status: {type: Array},
    price: {type: mongoose.Types.ObjectId, ref: 'product'},
    buyerId: {type: mongoose.Types.ObjectId, ref: 'user'},
    sellId: {type: mongoose.Types.ObjectId, ref: 'user'},
    order_status :{type: Array},
}

const orderSchema = new mongoose.Schema(order,{
    timestamps: true
})

module.exports = mongoose.model('order',orderSchema)