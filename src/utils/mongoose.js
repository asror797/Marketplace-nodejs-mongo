const mongoose = require('mongoose')


const mongo = async() => {
   try {
      mongoose.connect('mongodb://localhost:27017/ecommerce',{
         useNewUrlParser: true,
         useFindAndModify: false,
         useUnifiedTopology: true
      });
   } catch (error) {
      console.log(error)
   }
}

module.exports = mongo;