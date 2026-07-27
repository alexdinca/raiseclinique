const { Resend } = require('resend');
const twilio = require('twilio');

// Must stay in sync with the service names in services-data.js
// (the booking dropdown is populated from that file at runtime).
const ALLOWED_TREATMENTS = new Set([
  // Tratamente faciale
  'Oxygen Elixir',
  'Instant Glow Microneedling',
  'Mezoterapie Glow Up',
  'Hydro-Glow & Deep Cleanse',
  'Pro-Age & Collagen Booster',
  'Flash Radiance & Detox',
  'Teenage Dream',
  'Hollywood Peel',
  'Pachet Hollywood Deluxe',
  // Îndepărtare tatuaje
  'Îndepărtare cu laser PICO',
  'Îndepărtare cu substanță alcalină',
  'Îndepărtare laser & substanță alcalină',
  // Laminare sprâncene
  'Stilizare & laminare sprâncene',
  // HIFU
  'HIFU gușă',
  'HIFU full face',
  'HIFU full face & gușă',
  'HIFU brațe',
  'HIFU zona fesieră',
  'HIFU coapse',
  'HIFU abdomen',
  'HIFU full body',
  'HIFU full face & full body',
  // General
  'Consultație & Recomandare',
]);

const MAX = { name: 120, phone: 30, email: 254, treatment: 100, date: 10, message: 1000 };

// Accept only strings — reject arrays/objects/numbers silently as empty
function str(val, max) {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, max);
}

function esc(val) {
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// WhatsApp Content template variable values may not contain newlines, tabs or
// runs of spaces, and may not be empty — violations fail the send (21656/92007).
// Runtime ceiling is 256 chars per value, so slice well under it.
function tplVar(value, fallback = '-') {
  const s = String(value ?? '')
    .replace(/[\r\n\t\v\f\u2028\u2029]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if (s === '') return fallback;
  return s.length > 200 ? s.slice(0, 197) + '...' : s;
}

function isValidEmail(v) {
  return v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function isValidPhone(v) {
  // digits, spaces, +, -, (, ) — at least 7 chars after stripping spaces
  return /^[\d\s+\-()/]{7,30}$/.test(v) && v.replace(/\D/g, '').length >= 7;
}

function isValidDate(v) {
  if (!v) return true; // optional field
  return /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ct = req.headers['content-type'] ?? '';
  if (!ct.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json' });
  }

  const body = req.body ?? {};

  // Sanitize first — enforce types and max lengths
  const name      = str(body.name,      MAX.name);
  const phone     = str(body.phone,     MAX.phone);
  const email     = str(body.email,     MAX.email);
  const treatment = str(body.treatment, MAX.treatment);
  const date      = str(body.date,      MAX.date);
  const message   = str(body.message,   MAX.message);

  // Validate required presence
  if (!name || !phone || !email || !treatment) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Validate formats
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (!isValidPhone(phone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }
  if (!ALLOWED_TREATMENTS.has(treatment)) {
    return res.status(400).json({ error: 'Invalid treatment selection' });
  }
  if (!isValidDate(date)) {
    return res.status(400).json({ error: 'Invalid date format' });
  }

  // Build outputs from sanitized values only
  const dateRow = date    ? `<tr><td style="padding:8px 0;border-bottom:1px solid #eee;width:140px"><strong>Dată preferată</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(date)}</td></tr>` : '';
  const msgRow  = message ? `<tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Mesaj</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(message)}</td></tr>` : '';

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
      from:    process.env.EMAIL_FROM,
      to:      process.env.CLINIC_EMAIL.split(',').map(e => e.trim()).filter(Boolean),
      replyTo: email,
      subject: `Programare nouă — ${treatment} (${name})`,
      html:    htmlBody,
    });
    results.email = true;
  } catch (err) {
    console.error('Resend error:', err.message);
    errors.push('email');
  }

  // WhatsApp notification. Preferred path is an approved Content template,
  // which is the only thing that works outside WhatsApp's 24h service window.
  // Falls back to a freeform body when TWILIO_CONTENT_SID isn't configured —
  // that path only delivers inside the window and otherwise fails with 63016.
  const contentSid = (process.env.TWILIO_CONTENT_SID || '').trim();
  const mode = contentSid ? 'template' : 'freeform';

  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const payload = {
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to:   `whatsapp:${process.env.CLINIC_WHATSAPP}`,
    };

    if (contentSid) {
      // contentSid REPLACES body — sending both fails with 35127.
      payload.contentSid = contentSid;
      payload.contentVariables = JSON.stringify({
        '1': tplVar(name),
        '2': tplVar(phone),
        '3': tplVar(treatment),
        '4': tplVar(date,    'nespecificata'),  // optional field
        '5': tplVar(message, 'fara mesaj'),     // optional field
      });
      // Twilio's docs disagree on whether a Messaging Service is required for
      // Content sends; passing it alongside `from` satisfies both readings and
      // the sender needn't be in the service's pool. Optional.
      if (process.env.TWILIO_MESSAGING_SERVICE_SID) {
        payload.messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID.trim();
      }
    } else {
      payload.body = whatsappText;
    }

    const msg = await client.messages.create(payload);
    console.log('Twilio ok:', JSON.stringify({ mode, sid: msg.sid, status: msg.status }));
    results.whatsapp = true;
  } catch (err) {
    // err.code is what actually identifies the failure (63016, 21656, 63028…);
    // logging only err.message hides it.
    console.error('Twilio error:', JSON.stringify({
      mode, message: err.message, code: err.code, status: err.status, moreInfo: err.moreInfo,
    }));
    errors.push('whatsapp');
  }

  if (results.email || results.whatsapp) {
    return res.status(200).json({ ok: true, results });
  }

  return res.status(500).json({ error: 'Notification delivery failed', details: errors });
};
