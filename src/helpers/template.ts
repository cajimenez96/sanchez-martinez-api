interface FormData {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const generateTemplate = ({name, lastName, email, subject, message}: FormData) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta desde la web</title>
  </head>
  <style>
    body {
      font-family: Helvetica, sans-serif;
      font-size: 16px;
    }
    .consultation {
      margin-top: 50px;
    }
    .content {
        box-sizing: border-box;
        margin: 50px;
        max-width: 992px;
        padding: 10px;
        border: white;
        border-radius: 12px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
      }
    span {
      font-weight: bold;
    }
  </style>
  <body>
    <div class="content">
      <p>Enviado por: <span>${name} ${lastName}</span></p>
      <p>Email: <span>${email}</span></p>
      <p>Asunto: <span>${subject}</span></p>
      <div class="consultation">
        <span>Consulta:</span>
        <p>${message}</p>
      </div>
    </div>
  </body>
</html>
  `
}