import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes';
import bodyParser from 'body-parser';
import connectDB from './config/db';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
connectDB();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});