const mongoose = require('mongoose')

const reply = {
    content: {
        type: String
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}

const replySchema = new mongoose.Schema(reply,{
    timestamps: true
})

module.exports = mongoose.model('reply',replySchema)