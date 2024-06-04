import {Request, RequestHandler, Response} from 'express';
import { createTopic, getTopic, getTopics, updateTopic } from '../services/topic.services';

export const getAllTopics: RequestHandler = async (req: Request, res: Response) => {
  try {
    const topics = await getTopics();
    if (!topics) throw Error();
    
    return res.status(200).json(topics);
  } catch (error) {
    console.log('Error getAllTopics: ', error);
    return res.status(400).json(error);
  }

}

export const addTopic: RequestHandler = async (req: Request, res: Response) => {
  try {
    const newTopic = req.body;
    const topic = await createTopic(newTopic);
    if (!topic) throw Error();

    return res.status(200).json({message: 'El post se agregó con éxito!'})
  } catch (error) {
    console.log('Error addTopic: ', error);
    return res.status(400).json(error);
  }
}

export const getTopicById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const topic = await getTopic(id);

    if (!topic) throw Error();

    return res.status(200).json(topic)
    
  } catch (error) {
    console.log('Error getTopicById: ', error);
    return res.status(400).json(error);
  }
}

export const updateTopicById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const topics = await updateTopic(data);

    if (!topics) throw Error();
    
    return res.status(200).json({message: 'El post se modificó con éxito!'});
    
  } catch (error) {
    console.log('Error updateTopic: ', error);
    return res.status(400).json(error);
  }
}
