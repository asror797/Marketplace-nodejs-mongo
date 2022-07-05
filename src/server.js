const express = require('express')
const app = express()
const mongo = require('./utils/mongoose')
const router = require('./modules')


mongo()
   .then(() => {
      console.log('Mongoose connected')
   });


app.use(express.json())

app.use(router)


app.get('/',(req , res) => {
   res.json({
      message:"ok"
   })
})




app.listen(9000,() => {
   console.log('Server is ready at 9000 port')
})