import path from 'path';
import fs from 'fs';

const dataFilePath = path.join(__dirname, '../data', 'topic.data.json');

export const readTopics = async () => {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(data);
};

export const writeTopic = async (topics: any) => fs.writeFileSync(dataFilePath, JSON.stringify(topics, null, 2), 'utf-8');
