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

    // Configure nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'agpnaturevilla@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    // Send email
    const mailOptions = {
      from: `"AGP Nature Villa Website" <${process.env.GMAIL_USER || 'agpnaturevilla@gmail.com'}>`,
      to: 'agpnaturevilla@gmail.com',
      replyTo: email,
      subject: `New Booking Inquiry from ${name}`,
      text: emailText,
      html: emailHTML
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message', details: error.message },
      { status: 500 }
    )
  }
}
