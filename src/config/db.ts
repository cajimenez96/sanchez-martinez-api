import mongoose from 'mongoose';
import { URI } from '../helpers/constants';

const connectDB = async () => {
  try {
    if (!URI) {
      throw new Error('MONGODB_URI is not defined');
    }
    await mongoose.connect(URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
