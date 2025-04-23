import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendMail = async (email, subject, text) => {
  try {
    const msg = {
      to: email,
      from: "aqibmalik1586@gmail.com",
      subject: subject,
      html: text,
    };
    await sgMail.send(msg);
  } catch (error) {
    throw new Error("Failed to send mail");
  }
};

export default sendMail;
