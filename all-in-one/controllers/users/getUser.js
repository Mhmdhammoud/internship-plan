const UserModel = require('../../schemas/user.schema');
module.exports = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).json({
        message: 'Bad Request',
        error: 'id is required',
      });
    }
    const isUserFound = await UserModel.findById(req.query.id);

    if (!isUserFound) {
      return res.status(404).json({
        message: 'Not Found',
        error: 'User not found',
      });
    }

    return res.status(200).json({
      message: 'User Found',
      data: isUserFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
