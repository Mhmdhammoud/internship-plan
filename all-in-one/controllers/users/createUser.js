const UserModel = require('../../schemas/user.schema');
module.exports = async (req, res) => {
  try {
    const userCreated = await UserModel.create(req.body);
    return res.status(201).json({
      message: 'User Created',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      message: error.message,
    });
  }
};
