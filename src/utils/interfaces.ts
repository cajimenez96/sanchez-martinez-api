import { Document } from 'mongoose';
export interface IUser extends Document {
  userName: string;
  password: string;
}

export interface IPost extends Document {
  title: string;
  content: string;
  images: string[];
  front: string;
  location: string;
  category: string;
  author: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}
