const mongoose = require('mongoose')
require('../models/product.model')
require('../models/market.model')


const mongo = async() => {
   try {
      mongoose.connect('mongodb://localhost:27017/ecommerce');
   } catch (error) {
      console.log(error)
   }
}

module.exports = mongo;