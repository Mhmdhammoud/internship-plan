const UserModel = require('../../schemas/user.schema')
const bcrypt = require('bcrypt')
const jwt = require('../../utils/jwt')
module.exports = async (req, res) => {
  try {
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
    const doesUserExist = await UserModel.findOne({ email: req.body.email })
    if (!doesUserExist) {
      return res.status(404).json({
        message: 'User was not found.'
      })
    }
    const doesPasswordMatch = await bcrypt.compare(
      req.body.password,
      doesUserExist.password
    )
    if (!doesPasswordMatch) {
      return res.status(403).json({
        message: 'Invalid email or password.'
      })
    }
    const payload = {
      _id: doesUserExist._id,
      email: doesUserExist.email,
      name: doesUserExist.name
    }
    const token = await jwt.sign(payload)
    return res.status(200).json({
      message: 'Logged in successfully',
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
}
