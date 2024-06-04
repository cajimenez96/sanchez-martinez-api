import express from 'express';
import { getAllTopics, addTopic, getTopicById, updateTopicById } from '../controller/topic.controller';

const topicRouter = express.Router();

topicRouter.get('/', getAllTopics); //Obtener todos los topicos

topicRouter.post('/:id', getTopicById); //Obtener un topico

topicRouter.post('/add', addTopic); //Agregar un topico

topicRouter.put('/update', updateTopicById); //modificar un topico


export default topicRouter;