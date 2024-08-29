const mongoose = require('mongoose');
const majorModel = require('./major.schema');
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    CRN: {
      type: String,
      required: [true, 'CRN is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    capacity: {
      type: Number,
      required: [true, 'Capacity is required'],
    },
    major: {
      type: mongoose.ObjectId,
      ref: majorModel,
      required: [true, 'Major is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const courseModel = mongoose.model('course', courseSchema);
module.exports = courseModel;
