import mongoose from 'mongoose';

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('successfully connected to database');
  } catch (error) {
    console.warn('Error occured in connecting to database');
  }
};
