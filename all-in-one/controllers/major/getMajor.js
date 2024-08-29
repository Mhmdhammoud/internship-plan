const MajorModel = require('../../schemas/major.schema');
module.exports = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).json({
        message: 'Bad Request',
        error: 'id is required',
      });
    }
    const isMajorFound = await MajorModel.findById(req.query.id);

    if (!isMajorFound) {
      return res.status(404).json({
        message: 'Not Found',
        error: 'major not found',
      });
    }

    return res.status(200).json({
      message: 'Major Found',
      data: isMajorFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
