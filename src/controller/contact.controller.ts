import {Request, RequestHandler, Response} from 'express';
import { sendEmail } from '../services/contact.services';

export const sendEmailContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    const newForm = req.body;
    const send = await sendEmail(newForm);

    if (!send) throw Error();
    
    return res.status(200).json({message: 'Tu mensaje ha sido enviado exitosamente.', status: 200});

  } catch (error) {
    console.log('Error sendMail: ', error);
    return res.status(400).json(error);
  }
}