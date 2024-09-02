const UserModel = require('../../schemas/user.schema')
module.exports = async (req, res) => {
  try {
    if (!req.body.name || req.body.name === '') {
      return res.status(400).json({
        message: 'Name is required'
      })
    }
    if (!req.body.email || req.body.email === '') {
      return res.status(400).json({
        message: 'Email is required'
      })
    }
    if (!req.body.password || req.body.password === '') {
      return res.status(400).json({
        message: 'Password is required'
      })
    }
    if (req.body.password.length < 6) {
      return res.status(400).json({
        message: 'Password too short.'
      })
    }
    if (!req.body.phoneNumber || req.body.phoneNumber === '') {
      return res.status(400).json({
        message: 'Phone number is required'
      })
    }
    const doesUserExist = await UserModel.findOne({ email: req.body.email })
    if (doesUserExist) {
      return res.status(400).json({
        message: 'Email already exist.'
      })
    }
    const createdUser = await UserModel.create(req.body)

    return res.status(201).json({
      message: 'User created successfully.'
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
