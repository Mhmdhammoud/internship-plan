const MajorModel = require('../../schemas/major.schema');

module.exports = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(404).json({
        message: 'Failure',
        error: 'id is required',
      });
    }
    await MajorModel.findByIdAndDelete(req.query.id);
    return res.status(204).json({});
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
