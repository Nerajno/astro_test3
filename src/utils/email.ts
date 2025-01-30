import nodemailer from "nodemailer";

interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
}

async function sendEmail(props: ISendEmail) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  let message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: props.subject,
    name: props.name,
    html: `<h1>Contact Form</h1><br>
    <b>Name</b>: ${props.name}<br>
    <b>Email</b>: ${props.email}<br>
    <b>Message</b>: ${props.html}`,
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };
