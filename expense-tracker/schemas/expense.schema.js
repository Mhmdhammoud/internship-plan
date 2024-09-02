const mongoose = require('mongoose')
const userModel = require('./user.schema')
const expenseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: userModel,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('expense', expenseSchema)
