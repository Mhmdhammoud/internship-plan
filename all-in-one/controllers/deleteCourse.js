const CourseModel = require('../schemas/course.schema');
module.exports = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).json({
        message: 'Bad Request',
        message: 'id is required',
      });
    }
    const course = await CourseModel.findById(req.query.id);
    if (!course) {
      return res.status(404).json({
        message: 'Not Found',
        message: 'Course not found',
      });
    }
    await CourseModel.findByIdAndDelete(req.query.id);
    return res.status(200).json({
      message: 'Course Deleted',
    });
  } catch (error) {
    const err = error;
    return res.status(500).json({
      message: 'Internal Server Error',
      message: err.message,
    });
  }
};
