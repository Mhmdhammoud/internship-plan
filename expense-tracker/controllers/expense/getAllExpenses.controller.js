const ExpenseModel = require('../../schemas/expense.schema')
const mongoose = require('mongoose')
module.exports = async (req, res) => {
  try {
    const filters = {
      user: req.user._id
    }

    const allExpenses = await ExpenseModel.find(filters).populate(
      'user',
      '-password'
    )
    return res.status(200).json({
      message: 'All expenses fetched successfully',
      data: allExpenses
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
