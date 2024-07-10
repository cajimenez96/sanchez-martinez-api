import express from 'express';
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePostById,
  deletePostById
} from '../controller/post.controller';
import { authMiddleware } from '../middleware/authMiddleware';


const topicRouter = express.Router();

topicRouter.get('/', getAllPosts); //Obtener todos los posts
topicRouter.get('/:id', getPostById); //Obtener un post
topicRouter.post('/add', /*authMiddleware,*/ createPost); //Agregar un post
topicRouter.patch('/update/:id', authMiddleware, updatePostById); //modificar un post
topicRouter.post('/delete/:id', authMiddleware, deletePostById); //eliminar un post


export default topicRouter;