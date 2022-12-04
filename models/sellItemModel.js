const mongoose = require('mongoose')

const sellItem = {
    item: {type: mongoose.Types.ObjectId, ref: 'product'},
    quantity: {type: Number},
    price: {type: mongoose.Types.ObjectId, ref: 'product'},
    buyerId: {type: mongoose.Types.ObjectId, ref: 'user'},
    sellId: {type: mongoose.Types.ObjectId, ref: 'user'},
    sellItem_status :{type: Array},
}

const sellItemSchema = new mongoose.Schema(sellItem,{
    timestamps: true
})

module.exports = mongoose.model('sellItem',sellItemSchema)