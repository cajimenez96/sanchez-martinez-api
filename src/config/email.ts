import nodemailer from 'nodemailer';
import { EMAIL_HOST, EMAIL_PASS, EMAIL_USER } from '../helpers/constants';

export const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

transporter.verify().then(() => {
  console.log('Ready to send emails');
}).catch(err => {
  console.error('Error with email configuration:', err);
});
