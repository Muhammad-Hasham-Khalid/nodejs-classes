import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      length: 50,
      trim: true,
      default: 'Nothing',
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

// small letters
// singular

// ORM : Object Relational Mapper
export const Item = mongoose.model('item', itemSchema);
