const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
