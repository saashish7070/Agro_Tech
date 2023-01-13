const mongoose = require('mongoose')

const user = {
    name: {
        type: String,
        required: true
    },
    is_admin:{
        type: Boolean,
        default: false
    },
    firstName: {
      type: String  
    },
    lastName: {
        type: String
    },
    username:{
        type: String,
        required: true,
        index: {unique: true}
    },
    image: {
        type: String
    },
    address: {
        type: String,
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
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    order: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'order'
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
            type: mongoose.Types.ObjectId,
            ref: 'order'
        }
    ]


}

const userSchema = new mongoose.Schema(user, {
    timestamps: true
})

module.exports = mongoose.model('user',userSchema)