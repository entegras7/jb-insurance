import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, subject, message } = await request.json();

    // 1. Configure your SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP host (e.g., smtp.office365.com)
      port: 465, // or 587 for TLS
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_EMAIL, // Your email address
        pass: process.env.SMTP_PASSWORD, // Your email password or App Password
      },
    });

    // 2. Define the email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_EMAIL}>`, // Sender address
      to: "info@jbic.in", // RECEIVER: The email where you want to receive inquiries
      replyTo: email, // So you can hit "Reply" and answer the customer
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0b3c6d;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px;">${message}</p>
        </div>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}