const mongoose = require('mongoose')
const dbConnection = async()=>{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
}


module.exports = dbConnection