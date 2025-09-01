// api/sendMail.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Tu obsłuż EmailJS lub inny serwis mailowy, używając kluczy z ENV
  const { from_name, reply_to, subject, message, template_id } = req.body;

  // Wybierz odpowiedni template_id na podstawie parametru z frontendu
  let selectedTemplateId = process.env.EMAILJS_TEMPLATE_ID_KONTAKT;
  if (template_id === "cv") {
    selectedTemplateId = process.env.EMAILJS_TEMPLATE_ID_CV;
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: selectedTemplateId,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: { from_name, reply_to, subject, message }
      })
    });

    const responseText = await response.text();
    console.log('EmailJS response:', response.status, responseText);

    if (response.ok) {
      res.status(200).json({ success: true, emailjs: responseText });
    } else {
      res.status(500).json({ error: responseText });
    }
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: err.message });
  }
}