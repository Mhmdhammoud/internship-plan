const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(8)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})
module.exports = mongoose.model('user', userSchema)
