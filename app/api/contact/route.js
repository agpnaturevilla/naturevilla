import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, checkIn, checkOut, guests, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if Gmail credentials are configured
    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPassword) {
      console.error('Gmail credentials not configured')
      console.error('GMAIL_USER:', gmailUser ? 'Set' : 'Missing')
      console.error('GMAIL_APP_PASSWORD:', gmailPassword ? 'Set' : 'Missing')

      return NextResponse.json(
        {
          error: 'Email service not configured. Please contact the administrator.',
          message: 'Your inquiry has been logged but email notification failed.'
        },
        { status: 500 }
      )
    }

    // Create email HTML content
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #6b7280 0%, #475569 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Booking Inquiry</h1>
          <p style="color: #e5e7eb; margin: 10px 0 0 0;">AGP Nature Villa</p>
        </div>

        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Guest Information</h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Name:</strong> <span style="color: #1f2937;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong style="color: #4b5563;">Phone:</strong> <a href="tel:${phone}" style="color: #059669; text-decoration: none;">${phone}</a></p>` : ''}
          </div>

          ${checkIn || checkOut || guests ? `
            <h2 style="color: #1f2937; margin-top: 30px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Stay Details</h2>
            <div style="margin: 20px 0;">
              ${checkIn ? `<p style="margin: 10px 0;"><strong style="color: #4b5563;">Check-in:</strong> <span style="color: #1f2937;">${new Date(checkIn).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>` : ''}
              ${checkOut ? `<p style="margin: 10px 0;"><strong style="color: #4b5563;">Check-out:</strong> <span style="color: #1f2937;">${new Date(checkOut).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>` : ''}
              ${guests ? `<p style="margin: 10px 0;"><strong style="color: #4b5563;">Number of Guests:</strong> <span style="color: #1f2937;">${guests}</span></p>` : ''}
            </div>
          ` : ''}

          ${message ? `
            <h2 style="color: #1f2937; margin-top: 30px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Message</h2>
            <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #6b7280; border-radius: 4px;">
              <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background-color: #f3f4f6; border-radius: 8px; text-align: center;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              📧 Reply directly to this email to respond to ${name}<br/>
              📞 Or call them at ${phone || 'No phone number provided'}
            </p>
          </div>

          <div style="margin-top: 30px; text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
              This inquiry was submitted via AGP Nature Villa contact form
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
              Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </div>
        </div>
      </div>
    `

    // Create plain text version
    const emailText = `
New Booking Inquiry - AGP Nature Villa

GUEST INFORMATION
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

${checkIn || checkOut || guests ? `
STAY DETAILS
${checkIn ? `Check-in: ${new Date(checkIn).toLocaleDateString()}` : ''}
${checkOut ? `Check-out: ${new Date(checkOut).toLocaleDateString()}` : ''}
${guests ? `Guests: ${guests}` : ''}
` : ''}

${message ? `
MESSAGE
${message}
` : ''}

---
This inquiry was submitted via AGP Nature Villa contact form on ${new Date().toLocaleString()}
    `

    console.log('Attempting to send email...')
    console.log('From:', gmailUser)
    console.log('To: agpnaturevilla@gmail.com')

    // Configure nodemailer with Gmail using explicit SMTP settings
    // This works better in serverless environments like Vercel
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: gmailUser,
        pass: gmailPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Send email
    const mailOptions = {
      from: `"AGP Nature Villa Website" <${gmailUser}>`,
      to: 'agpnaturevilla@gmail.com',
      replyTo: email,
      subject: `New Booking Inquiry from ${name}`,
      text: emailText,
      html: emailHTML
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json(
      {
        message: 'Message sent successfully',
        messageId: info.messageId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    })

    return NextResponse.json(
      {
        error: 'Failed to send message',
        details: error.message,
        suggestion: 'Please try calling us directly at +91 9892611983'
      },
      { status: 500 }
    )
  }
}
