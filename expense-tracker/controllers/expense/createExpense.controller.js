const mongoose = require('mongoose')
const UserModel = require('../../schemas/user.schema')
const ExpenseModel = require('../../schemas/expense.schema')
module.exports = async (req, res) => {
  try {
    if (!req.body.description || req.body.description === '') {
      return res.status(400).json({
        message: 'Description is required'
      })
    }
    if (!req.body.amount || req.body.amount === 0 || isNaN(req.body.amount)) {
      return res.status(400).json({
        message: 'Amount is required'
      })
    }
    const user = req.user._id
    await ExpenseModel.create({
      ...req.body,
      user: user
    })
    return res.status(201).json({})
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
