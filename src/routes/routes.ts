import express from 'express';
import postRouter from './post.routes';
import contactRouter from './contact.routes';
import userRouter from './user.routes';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use('/post', authMiddleware, postRouter);
router.use('/contact', contactRouter);
router.use('/user', userRouter);

export default router;