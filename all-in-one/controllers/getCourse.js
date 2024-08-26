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
    return res.status(200).json({
      message: 'Course',
      data: course,
    });
  } catch (error) {
    const err = error;
    return res.status(500).json({
      message: 'Internal Server Error',
      message: err.message,
    });
  }
};
