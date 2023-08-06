const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:String,
    description:{
        type:String
    },
    price:Number,
    inStock:Number
},{timesamps:true})

module.exports = mongoose.model('product',productSchema)