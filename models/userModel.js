const mongoose = require('mongoose')

const user = {
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        index: {unique: true}
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: 'address',
        required: true
    },
    post_number:{
        type: Number
    },
    phone_number: {
        type: Number,
        required: true
    },
    email_address: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    order: [
        {
            item: {
                type: mongoose.Types.ObjectId,
                ref: 'product'
            },
            quantity: Number
        }
    ],
    reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'reviews'
        }
    ],
    wishlist : [
        {
            type: mongoose.Types.ObjectId,
            ref: 'product'
        }
    ],
    sellItem: [
        {
            item: {
                types: mongoose.Types.ObjectId,
                ref: 'product'
            },
            quantity: {
                types: Number
            }
        }
    ]


}

const userSchema = new mongoose.Schema(user, {
    timestamps: true
})

module.exports = mongoose.model('user',userSchema)