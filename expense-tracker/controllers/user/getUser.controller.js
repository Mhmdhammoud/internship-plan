const UserModel = require('../../schemas/user.schema')
module.exports = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).json({
        message: 'ID is required.'
      })
    }
    const user = await UserModel.findById(req.query.id).select('-password')
    if (!user) {
      return res.status(404).json({
        message: 'User was not found.'
      })
    }
    return res.status(200).json({
      message: 'User found',
      data: user
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
