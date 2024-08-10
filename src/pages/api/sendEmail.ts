import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

interface EmailResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    try {
      // Create reusable transporter object using SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // True for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      //console.log(process.env.EMAIL_USER)
      //console.log(process.env.EMAIL_PASS)
      
      const info = await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: "hungtachen0121@gmail.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({success: true, message: "Email sent successfully!"});
    } catch (error) {
      console.error("Error sending email", error);
      res.status(500).json({success: false, message: "Failed to send email"});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}