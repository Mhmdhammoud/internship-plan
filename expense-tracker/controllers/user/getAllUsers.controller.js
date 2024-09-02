const UserModel = require('../../schemas/user.schema')
module.exports = async (req, res) => {
  try {
    const users = await UserModel.find({}).select('-password')
    return res.status(200).json({
      message: 'All Users',
      data: users
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
