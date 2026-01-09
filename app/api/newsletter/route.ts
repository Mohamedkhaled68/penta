import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface NewsletterData {
    email: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: NewsletterData = await req.json();
        const { email } = body;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: 'Penta Studio <onboarding@resend.dev>',
            to: [process.env.COMPANY_EMAIL || 'gadoomarsh@gmail.com'],
            subject: `📞 New Contact Request`,
            html: `
    <html>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0F1629; padding:40px; color:#fff;">
      <div style="max-width:600px;margin:auto;background:#060B27;padding:32px;border-radius:12px;border:1px solid rgba(41,230,140,0.2)">
        <h1 style="color:#29E68C;font-size:22px;margin-bottom:20px;">📞 New Contact Request</h1>
        <p style="color:#E5E7EB;font-size:16px;">A client has just requested to be contacted back:</p>
        <div style="margin-top:20px;padding:16px;background:rgba(41,230,140,0.08);border-radius:8px;">
          <strong style="color:#29E68C;">Email:</strong> ${email}
        </div>
      </div>
    </body>
    </html>
  `
        });

        await resend.emails.send({
            from: 'Penta Studio <onboarding@resend.dev>',
            to: [email],
            subject: '📞 We will contact you soon',
            html: `
    <html>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0F1629; padding:40px; color:#fff;">
      <div style="max-width:600px;margin:auto;background:#060B27;padding:32px;border-radius:12px;border:1px solid rgba(41,230,140,0.2)">
        <h1 style="color:#29E68C;font-size:22px;margin-bottom:20px;">📞 Thank you!</h1>
        <p style="color:#E5E7EB;font-size:16px;">
          We’ve received your request and our team will contact you shortly.
        </p>
      </div>
    </body>
    </html>
  `
        });


        return NextResponse.json(
            { success: true, message: 'Subscribed successfully' },
            { status: 200 }
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Something went wrong', details: error.message || 'Unknown error' },
            { status: 500 }
        );
    }
}
