import nodemailer from 'nodemailer'

// Netlify Function equivalent of server/index.js's POST /api/contact route.
// netlify.toml redirects /api/contact here so the same frontend fetch call
// works in both `npm run dev` (proxied to the Express server) and on Netlify.
export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed.' }) }
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body.' }) }
  }

  const { name, email, company, brand, projectType, subject, message } = body

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email and message are required.' }) }
  }

  const lines = [
    'This message was sent from the GST Concepts website contact form.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    brand && `Brand of Interest: ${brand}`,
    projectType && `Project Type: ${projectType}`,
    subject && `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].filter(Boolean).join('\n')

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_FROM_EMAIL,
      // No Reply-To: Yahoo's outbound SMTP hard-rejects (550) mail whose
      // Reply-To domain differs from the authenticated sending domain, which
      // a customer's own address always would. The sender's email is still
      // in the body above for manual reply.
      subject: `[GST Concepts Website] New Inquiry from ${name}`,
      text: lines,
    })
    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message. Please try again later.' }) }
  }
}
