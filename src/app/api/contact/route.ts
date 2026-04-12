import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "pushkarajbaradkar1@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
  } else {
    console.log("[Contact Form]", { name, email, message });
  }

  return NextResponse.json({ success: true });
}
