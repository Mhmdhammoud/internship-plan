const MajorModel = require('../../schemas/major.schema');
module.exports = async (req, res) => {
  try {
    const majors = await MajorModel.find();
    return res.status(200).json({
      message: 'All Majors',
      data: majors,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
