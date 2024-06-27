import dotenv from 'dotenv';
dotenv.config();


export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const URI = process.env.MONGO_URI;