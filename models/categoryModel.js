const mongoose = require('mongoose')

const category = {
    title: {
        type: String,
        required: true
    }
}

const categorySchema = new mongoose.Schema(category,{
    timestamps: true
})

module.exports = mongoose.model('category',categorySchema)