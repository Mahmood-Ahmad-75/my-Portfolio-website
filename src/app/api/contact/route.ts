import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { username, email, subject, description } = await req.json();

    if (!username || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mahmoodraj75@gmail.com",
      replyTo: email,
      subject: subject || `New message from ${username}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #111827; margin-bottom: 4px;">New Contact Form Submission</h2>
          <hr style="border-color: #e5e7eb; margin-bottom: 20px;" />

          <p style="margin: 8px 0;"><strong>Name:</strong> ${username}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || "—"}</p>

          <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 6px;">
            <p style="margin: 0; white-space: pre-wrap;">${description}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
