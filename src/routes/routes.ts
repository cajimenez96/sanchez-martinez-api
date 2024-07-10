import express from 'express';
import postRouter from './post.routes';
import contactRouter from './contact.routes';
import userRouter from './user.routes';

const router = express.Router();

router.use('/post', postRouter);
router.use('/contact', contactRouter);
router.use('/user', userRouter);

export default router;