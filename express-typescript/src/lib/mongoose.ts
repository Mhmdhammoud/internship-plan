import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (!process.env.DB_URL) {
      console.log('DB URL was not available');
      process.exit(2);
    }
    return await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
