import mongoose from 'mongoose';

const connectDB = async () => {
    
  try {
    console.log("Attempting to connect to MongoDB...");
    const conn = await mongoose.connect('mongodb://localhost:27017/chai', {
    
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;