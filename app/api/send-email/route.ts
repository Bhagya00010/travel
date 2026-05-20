import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, query } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to admin with user details
    const adminMailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Query from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b;">New Contact Query</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Query:</strong></p>
          <p style="background: #f3f4f6; padding: 15px; border-radius: 8px;">${query}</p>
        </div>
      `,
    };

    // Thank you email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: "Thank You for Contacting TravelReady",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b;">Thank You!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to TravelReady. We have received your query and will get back to you shortly.</p>
          <p><strong>Your Query:</strong></p>
          <p style="background: #f3f4f6; padding: 15px; border-radius: 8px;">${query}</p>
          <p style="margin-top: 20px;">Best regards,<br>TravelReady Team</p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
