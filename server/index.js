import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, company, brand, projectType, subject, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
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
    res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// In production (e.g. Hostinger's Node.js hosting) this same server also serves
// the built React site from dist/, with an SPA fallback so react-router can
// handle deep links like /brands/xyz on refresh.
const distDir = [
  path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist'),
  path.join(process.cwd(), 'dist'),
].find((dir) => fs.existsSync(path.join(dir, 'index.html')))
if (!distDir) console.error('dist/index.html not found - did "npm run build" run?')
if (distDir) app.use(express.static(distDir))
app.use((req, res, next) => {
  if (!distDir || req.method !== 'GET' || req.path.startsWith('/api/')) return next()
  res.sendFile(path.join(distDir, 'index.html'))
})

const PORT = process.env.PORT || 5174
app.listen(PORT, () => console.log(`Contact API listening on :${PORT}`))
