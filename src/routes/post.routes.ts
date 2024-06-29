import express from 'express';
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePostById,
  deletePostById
} from '../controller/post.controller';

const topicRouter = express.Router();

topicRouter.get('/', getAllPosts); //Obtener todos los posts
topicRouter.get('/:id', getPostById); //Obtener un post
topicRouter.post('/add', createPost); //Agregar un post
topicRouter.patch('/update/:id', updatePostById); //modificar un post
topicRouter.post('/delete/:id', deletePostById); //eliminar un post


export default topicRouter;