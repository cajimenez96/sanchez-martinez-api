import { readTopics, writeTopic } from '../helpers/helper';


interface Topic {
  id: number | undefined;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  creationDate: string;
};

export const getTopics = async () => await readTopics();

export const createTopic = async (topic: Topic): Promise<boolean> => {
  const topics = await readTopics();

  topic.id = topics.length ? topics[topics.length - 1].id + 1 : 1;
  topics.push(topic);

  await writeTopic(topics);

  return true;
};

export const getTopic = async (idString: string) => {
  const id = parseInt(idString);
  const topics = await readTopics();

  const topic = topics.find((element: Topic) => element.id === id)

  return topic;
};

export const updateTopic = async (topic: Topic) => {
  let topics = await readTopics();

  topics = topics.map((element: Topic) => (element.id === topic.id ? { ...element, ...topic } : element));

  await writeTopic(topics);
  
  return true;
};
