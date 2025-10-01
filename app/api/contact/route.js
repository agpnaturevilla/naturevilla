import { NextResponse } from 'next/server'

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

    // Format the email content
    const emailContent = {
      to: 'agpnaturevilla@gmail.com',
      subject: `New Booking Inquiry from ${name}`,
      html: `
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
      `,
      text: `
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
    }

    // Use Resend API to send email
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured')
      // For now, just log the form data and return success
      console.log('Contact Form Submission:', body)
      console.log('Email Content:', emailContent)

      return NextResponse.json(
        {
          message: 'Form received successfully. Email service will be configured shortly.',
          data: body
        },
        { status: 200 }
      )
    }

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'AGP Nature Villa <bookings@agpnaturevilla.com>',
        to: [emailContent.to],
        reply_to: email,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Resend API error:', error)
      throw new Error('Failed to send email')
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return NextResponse.json(
      { message: 'Message sent successfully', emailId: result.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form', details: error.message },
      { status: 500 }
    )
  }
}
