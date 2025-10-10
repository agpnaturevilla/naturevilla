import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    gmailUserSet: !!process.env.GMAIL_USER,
    gmailPasswordSet: !!process.env.GMAIL_APP_PASSWORD,
    gmailUserLength: process.env.GMAIL_USER?.length || 0,
    gmailPasswordLength: process.env.GMAIL_APP_PASSWORD?.length || 0
  })
}
