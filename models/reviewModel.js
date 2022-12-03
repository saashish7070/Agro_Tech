const mongoose = require('mongoose')

const review = {
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String
    },
    likes: [{
        type : mongoose.Types.ObjectId,
        ref: 'likes'
    }],
    replies: [{
        types: mongoose.Types.ObjectId,
        ref: 'reply'
    }]
}

const reviewSchema = new mongoose.Schema(review,{
    timestamps: true
})

module.exports = mongoose.model('review',reviewSchema)