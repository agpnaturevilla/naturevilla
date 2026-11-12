import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'message']

const formatDate = (value) => {
  if (!value) return 'Not provided'
  try {
    return new Date(value).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    return value
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const missing = REQUIRED_FIELDS.filter((field) => !body?.[field]?.trim())
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    if (!body.recaptchaToken) {
      return NextResponse.json(
        { error: 'Captcha token missing.' },
        { status: 400 }
      )
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('Missing reCAPTCHA secret key in environment variables')
      return NextResponse.json(
        { error: 'Captcha service not configured.' },
        { status: 500 }
      )
    }

    const captchaParams = new URLSearchParams()
    captchaParams.append('secret', process.env.RECAPTCHA_SECRET_KEY)
    captchaParams.append('response', body.recaptchaToken)

    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: captchaParams.toString()
    })

    const captchaResult = await captchaResponse.json()

    if (!captchaResult.success) {
      console.warn('reCAPTCHA verification failed', captchaResult['error-codes'])
      return NextResponse.json(
        { error: 'Captcha verification failed. Please try again.' },
        { status: 400 }
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials in environment variables')
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 500 }
      )
    }

    const transporterOptions = {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    }

    if (process.env.ALLOW_INSECURE_EMAIL === 'true' || process.env.NODE_ENV === 'development') {
      transporterOptions.tls = { rejectUnauthorized: false }
    }

    const transporter = nodemailer.createTransport(transporterOptions)

    const {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      message
    } = body

    const plainText = `
New enquiry for AGP Nature Villa

Name: ${name}
Email: ${email}
Phone: ${phone}
Check-in: ${formatDate(checkIn)}
Check-out: ${formatDate(checkOut)}
Guests: ${guests || 'Not specified'}

Message:
${message}
`

    const htmlText = `
      <p><strong>New enquiry for AGP Nature Villa</strong></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Check-in:</strong> ${formatDate(checkIn)}</p>
      <p><strong>Check-out:</strong> ${formatDate(checkOut)}</p>
      <p><strong>Guests:</strong> ${guests || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `

    await transporter.sendMail({
      from: `"AGP Nature Villa" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: plainText,
      html: htmlText
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return NextResponse.json(
      { error: 'Unable to send message at the moment.' },
      { status: 500 }
    )
  }
}
