const { Resend } = require('resend');
const twilio = require('twilio');

function esc(val) {
  return String(val ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, treatment, date, message } = req.body ?? {};

  if (!name || !phone || !email || !treatment) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const dateRow = date ? `<tr><td><strong>Dată preferată</strong></td><td>${esc(date)}</td></tr>` : '';
  const msgRow  = message ? `<tr><td><strong>Mesaj</strong></td><td>${esc(message)}</td></tr>` : '';

  const htmlBody = `
    <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#2A231A">
      <h2 style="color:#9C7D36;margin-bottom:16px">Programare nouă</h2>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;width:140px"><strong>Nume</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(name)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Telefon</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(phone)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(email)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Tratament</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(treatment)}</td></tr>
        ${dateRow}
        ${msgRow}
      </table>
      <p style="margin-top:24px;font-size:13px;color:#8C7E68">Raise Beauty Clinique · sistem de programări</p>
    </div>`;

  const whatsappText =
    `🌸 *Programare nouă — Raise Beauty Clinique*\n\n` +
    `*Nume:* ${name}\n` +
    `*Telefon:* ${phone}\n` +
    `*Tratament:* ${treatment}` +
    (date    ? `\n*Dată:* ${date}` : '') +
    (message ? `\n*Mesaj:* ${message}` : '');

  const results = { email: false, whatsapp: false };
  const errors  = [];

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to:   process.env.CLINIC_EMAIL,
      replyTo: email,
      subject: `Programare nouă — ${treatment} (${name})`,
      html: htmlBody,
    });
    results.email = true;
  } catch (err) {
    console.error('Resend error:', err.message);
    errors.push('email');
  }

  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to:   `whatsapp:${process.env.CLINIC_WHATSAPP}`,
      body: whatsappText,
    });
    results.whatsapp = true;
  } catch (err) {
    console.error('Twilio error:', err.message);
    errors.push('whatsapp');
  }

  if (results.email || results.whatsapp) {
    return res.status(200).json({ ok: true, results });
  }

  return res.status(500).json({ error: 'Notification delivery failed', details: errors });
};
