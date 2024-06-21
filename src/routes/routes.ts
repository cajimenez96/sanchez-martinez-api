import express from 'express';
import topicRouter from './topic.routes';
import contactRouter from './contact.routes';

const router = express.Router();

router.use('/topic', topicRouter);
router.use('/contact', contactRouter);

export default router;