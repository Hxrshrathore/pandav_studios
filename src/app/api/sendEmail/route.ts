// File: app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse incoming request JSON
    const { name, email, message } = await req.json();

    // Create transporter using your email credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,  // Use environment variables
        pass: process.env.SMTP_PASS,  // Use environment variables
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"Capture Studio" <${process.env.SMTP_USER}>`,  // Sender name and email
      to: 'hxrshrathore@gmail.com',  // Replace with the recipient's email
      subject: `New Contact Form Submission from ${name}`,  // Email subject
      text: `You have a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,  // Plain text body
      replyTo: email,  // Allows you to reply directly to the user's email
    };

    // Send the email using the transporter with async/await (no callback)
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    // Log and return error if email sending fails
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email.' }), { status: 500 });
  }
}
