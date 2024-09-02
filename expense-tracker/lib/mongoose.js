const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    return await mongoose.connect(process.env.DB_URL)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
}
module.exports = connectDb
