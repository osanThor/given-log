import { EmailData } from "@/interfaces/in_Contact";

const nodeMailer = require("nodemailer");

const mailPoster = nodeMailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: process.env.NAVER_AUTH_USER,
    pass: process.env.NAVER_AUTH_PW,
  },
});

async function SendEmail({ from, subject, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[GIVEN-LOG] ${subject}`,
    from: from,
    html: `
      <h1>${subject}</h1>
      <div>${message}</div>
      <p>보낸사람 : ${from}</p>
      `,
  };

  return mailPoster.sendMail(mailData);
}

const ContactModel = { SendEmail };

export default ContactModel;
