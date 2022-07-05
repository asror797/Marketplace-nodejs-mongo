const mongoose = require('mongoose')


const MarketSchema = new mongoose.Schema({
   marketName:{
      type:String,
      maxLength:20, 
      required:true
   }
})


const marketModel = mongoose.model('Market',MarketSchema)


module.exports = marketModel;