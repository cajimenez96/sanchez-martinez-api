import express from 'express';
import topicRouter from './topic.routes';

const router = express.Router();

router.use('/topic', topicRouter);


export default router;