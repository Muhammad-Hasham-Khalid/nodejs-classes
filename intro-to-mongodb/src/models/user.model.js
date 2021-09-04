import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// small letters
// singular

export const User = mongoose.model('user', userSchema);
