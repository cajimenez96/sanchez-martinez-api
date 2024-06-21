import { transporter } from "../config/email";
import { EMAIL_USER } from "../helpers/constants";
import { generateTemplate } from "../helpers/template";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}


export const sendEmail = async (form: FormData): Promise<any> => {
  const { subject } = form;

  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject,
    html: generateTemplate(form) ,
  };

  return await transporter.sendMail(mailOptions);
};
