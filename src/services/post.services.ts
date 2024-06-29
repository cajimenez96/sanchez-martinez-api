import PostModel from '../models/post.model';
import { IPost } from '../utils/interfaces';

export const getPosts = async (): Promise<IPost[]> => {
  const posts = await PostModel.find();
  return posts;
};

export const addPost = async (post: IPost): Promise<IPost> => {
  const newPost = await PostModel.create(post)

  return newPost;
};

export const getPost = async (id: string) => {
  const post = await PostModel.findById({_id: id});

  return post;
};

export const updatePost = async (post: IPost, id: string): Promise<any> => {
  const update = await PostModel.findByIdAndUpdate({_id: id}, post);

  if (!update) return null

  return update;
};

export const deletePost = async (id: string): Promise<any> => {
  const deleted = await PostModel.findByIdAndDelete({_id: id});

  return deleted;
}