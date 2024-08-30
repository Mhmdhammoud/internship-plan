const jwt = require('jsonwebtoken');
const UserModel = require('../../schemas/user.schema');
module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({
        message: 'Email missing',
      });
    }
    const doesUserExist = await UserModel.findOne({ email: email });
    if (!doesUserExist) {
      return res.status(404).json({
        message: 'Email not found',
      });
    }
    const payload = {
      email: email,
      _id: doesUserExist._id,
      createdAt: doesUserExist.createdAt,
    };
    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({
      message: 'Success',
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
