const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Title is required'],
    },
    numberOfCreditsNeeded: {
      type: Number,
      required: [true, 'Title is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('major', majorSchema);
