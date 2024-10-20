// File: app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Create transporter using your email credentials
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',  // 'smtp.hostinger.com'
    port: 465,  // 465
    secure: true,  // true for port 465, false for other ports
    auth: {
      user: 'info@apnaventure.in',  // 'info@apnaventure.in'
      pass: 'Harshh@05',  // email password stored in .env.local
    },
  });

  // Email content
  const mailOptions = {
    from: `"Capture Studio" <${process.env.SMTP_USER}>`,  // Use your own email
    to: 'hxrshrathore@gmail.com',  // Replace with owner's email
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,  // This will allow you to reply directly to the user's email
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email.' }), { status: 500 });
  }
}
