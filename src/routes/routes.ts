import express from 'express';
import topicRouter from './topic.routes';
import contactRouter from './contact.routes';
import userRouter from './user.routes';
// import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use('/topic', topicRouter);
router.use('/contact', contactRouter);
router.use('/user', userRouter);

export default router;