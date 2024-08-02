import mongoose from 'mongoose';

const connectDB = async () => {
    
  try {
    
    const conn = await mongoose.connect('mongodb+srv://naman79820:c53WIJxaKEE0fT9O@cluster0.yubogm4.mongodb.net/Chai', {
    
    });
   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;