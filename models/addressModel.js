const mongoose = require('mongoose')

const address = {
    billing_address: {
      country: {Type: String},
      province: {Type: Array},  
      city: {Type: Array},  
      Area: {Type: Array},
      Address: {Type: String}  
    },
    delivery_address: {
      country: {Type: String},
      province: {Type: Array},  
      city: {Type: Array},  
      Area: {Type: Array},
      Address: {Type: String}  
    }
}

const addressSchema = new mongoose.Schema(address,{
    timestamps: true
})

module.exports = mongoose.model('address',addressSchema)