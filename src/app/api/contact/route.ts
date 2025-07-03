import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,  
      auth: {
        type: 'OAuth2',
        user: process.env.SENDER_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });
s
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL_ADDRESS,
      subject: `Portfolio ${name}:${email}`,
      text: `New Message from \n${name} : ${email} \n ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
