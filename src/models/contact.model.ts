import { EmailData } from "@/interfaces/in_Contact";
import nodeMailer from "nodemailer";

const transport = nodeMailer.createTransport({
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
    from: `${process.env.NAVER_AUTH_USER}@naver.com`,
    to: `${process.env.NAVER_AUTH_USER}@naver.com`,
    subject: `[GIVEN-LOG] ${subject}`,
    html: `
      <h2>${subject}</h2>
      <p>보낸사람 : ${from}</p>
      <div>${message}</div>
      `,
  };
  console.log(mailData);
  const data = await transport.sendMail(mailData);
  return data;
}

const ContactModel = { SendEmail };

export default ContactModel;
