import { EmailData } from "@/interfaces/in_Contact";
import nodeMailer from "nodemailer";

const transport = nodeMailer.createTransport({
  service: "naver",
  host: "smtp.naver.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NAVER_AUTH_USER,
    pass: process.env.NAVER_AUTH_PW,
  },
});
async function SendEmail({ from, subject, message }: EmailData) {
  console.log(process.env.NAVER_AUTH_USER);
  const mailData = {
    from: `${process.env.NAVER_AUTH_USER}`,
    to: `${process.env.NAVER_AUTH_USER}`,
    subject: `[GIVEN-LOG CONTACT] ${subject}`,
    html: `
      <html lang="kr">
                      <body>
                          <div>
                            <h2>${subject}</h2>
                            <p>보낸사람 : ${from}</p>
                            <div>${message}</div>
                          </div>
                      </body>
      </html>
      `,
  };
  const data = await transport.sendMail(mailData);
  return data;
}

const ContactModel = { SendEmail };

export default ContactModel;
