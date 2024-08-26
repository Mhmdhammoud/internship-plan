const CourseModel = require('../schemas/course.schema');
module.exports = async (req, res) => {
  try {
    // SELECT * FROM courses
    const courses = await CourseModel.find();

    return res.status(200).json({
      message: 'All courses',
      data: courses,
    });
  } catch (error) {
    const err = error;
    return res.status(500).json({
      message: 'Internal Server Error',
      message: err.message,
    });
  }
};
