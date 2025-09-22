import { NextRequest, NextResponse } from 'next/server'
import { personalInfo } from '@/lib/data/personal-info'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Here you can integrate with email services like:
    // 1. EmailJS (client-side)
    // 2. Resend
    // 3. SendGrid
    // 4. Nodemailer
    // 5. Or simple mailto redirect

    // For now, we'll create a mailto link and return success
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${mailtoBody}`

    // In a real implementation, you would send the email here
    // For now, we'll return the mailto link
    return NextResponse.json({
      success: true,
      message: 'Message received successfully!',
      mailtoLink,
      data: { name, email, message }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}