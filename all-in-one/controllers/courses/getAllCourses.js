const CourseModel = require('../../schemas/course.schema');
module.exports = async (req, res) => {
  try {
    const filteredMajor = req.query.major;
    const filteredTime = req.query.time;
    const filter = {};

    if (filteredMajor && filteredMajor.length > 0) {
      filter.major = filteredMajor;
    }

    if (filteredTime && filteredTime.length > 0) {
      filter.time = filteredTime;
    }

    const courses = await CourseModel.find(filter).populate('major');

    return res.status(200).json({
      message: 'All courses',
      data: courses,
      length: courses.length,
    });
  } catch (error) {
    const err = error;
    return res.status(500).json({
      message: 'Internal Server Error',
      message: err.message,
    });
  }
};
