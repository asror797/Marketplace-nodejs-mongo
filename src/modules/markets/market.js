const model = require('../../models/market.model')


module.exports = {
   GET:async(req,res) => {
      try {
         res.json(await model.find())
      } catch (error) {
         res.json({
            message:error
         })
      }
   }
}