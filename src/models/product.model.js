const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
   productName:{
      type:String,
      required:true
   },
   productDescription:{
      type:String,
      required:true
   }
})



const productModel = mongoose.model("Products", ProductSchema)


module.exports = productModel;