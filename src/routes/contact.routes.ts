import express from 'express';
import { sendEmailContact } from '../controller/contact.controller';


const contactRouter = express.Router();

contactRouter.post('/', sendEmailContact);


export default contactRouter;