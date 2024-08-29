const MajorModel = require('../../schemas/major.schema');

module.exports = async (req, res) => {
  try {
    const createdMajor = await MajorModel.create(req.body);
    return res.status(201).json({});
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
