import mongoose, { Document, Model, Schema } from 'mongoose';
import { IPost } from '../utils/interfaces';


const PostSchema: Schema<IPost> = new Schema(
  {
    title: { 
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    images: { 
      type: [String],
      default: []
    },
    location: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    front: {
      type: String,
      required: true,
    },
    source: {
      type: String,
    },
    author: { type: String },
  },
  {
    timestamps: true, // Agregar createdAt y updatedAt
  });

const PostModel: Model<IPost> = mongoose.model('Post', PostSchema);

export default PostModel;
