const CourseModel = require('../schemas/course.schema');
module.exports = async (req, res) => {
  try {
    const newlyCreatedCourse = await CourseModel.create(req.body);
    return res.status(204).json({});
  } catch (error) {
    const err = error;
    return res.status(500).json({
      message: 'Internal Server Error',
      message: err.message,
    });
  }
};
