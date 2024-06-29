import {Request, RequestHandler, Response} from 'express';
import { addPost, deletePost, getPost, getPosts, updatePost } from '../services/post.services';

export const getAllPosts: RequestHandler = async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    if (!posts) res.status(400).json({message: 'Intente más tarde'})
    
    return res.status(200).json(posts);
  } catch (error) {
    console.log('Error getAllPosts: ', error);
    return res.status(400).json(error);
  }
};

export const createPost: RequestHandler = async (req: Request, res: Response) => {
  try {
    const newPost = req.body;

    const post = await addPost(newPost);

    if (!post) res.status(400).json({message: 'Intente más tarde'})

    return res.status(200).json({message: 'El post se agregó con éxito!'});
  } catch (error) {
    console.log('Error createPost: ', error);
    return res.status(400).json(error);
  }
};

export const getPostById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await getPost(id);

    if (!post) res.status(400).json({message: 'Intente más tarde'})

    return res.status(200).json(post)
    
  } catch (error) {
    console.log('Error getPostById: ', error);
    return res.status(400).json(error);
  }
};

export const updatePostById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newPost = req.body;
    const post = await updatePost(newPost, id);

    console.log(post);


    if (!post) res.status(400).json({message: 'No existe el post'})
    
    return res.status(200).json(post);
    
  } catch (error) {
    console.log('Error updatePostById: ', error);
    return res.status(400).json(error);
  }
};

export const deletePostById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await deletePost(id);

    if (!deleted) res.status(400).json({message: 'Intente más tarde'})
    
    return res.status(200).json(deleted);
    
  } catch (error) {
    console.log('Error deletePostById: ', error);
    return res.status(400).json(error);
  }
};
