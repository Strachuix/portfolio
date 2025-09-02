// api/sendMail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { from_name, reply_to, subject, message, template_id } = req.body;

  // Wybierz temat maila na podstawie template_id
  let mailSubject = subject;
  if (template_id === 'cv') {
    mailSubject = 'Powiadomienie o pobraniu CV';
  }

  // Konfiguracja transportu SMTP (np. Gmail, Mailgun, SendGrid)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"${from_name}" <${reply_to}>`,
      to: process.env.MAIL_TO, // Twój e-mail odbiorcy
      subject: mailSubject,
      text: message
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail send error:', error);
    res.status(500).json({ error: error.message });
  }
}