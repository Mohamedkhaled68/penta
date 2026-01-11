/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    message: string;
    agreeToTerms: boolean;
}

export async function POST(req: NextRequest) {
    try {
        const body: ContactFormData = await req.json();
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
            message,
            agreeToTerms,
        } = body;

        if (!firstName || !lastName || !email || !phoneNumber || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        if (!agreeToTerms) {
            return NextResponse.json(
                { error: "You must agree to the terms" },
                { status: 400 }
            );
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        const emailToCompany = await resend.emails.send({
            from: "Penta Studio <onboarding@resend.dev>",
            to: [process.env.COMPANY_EMAIL || "gadoomarsh@gmail.com"],
            subject: `🎯 New Lead: ${firstName} ${lastName}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background: linear-gradient(180deg, #0a0f24 0%, #060B27 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0a0f24 0%, #060B27 100%); padding: 40px 20px;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #0F1629; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                                    
                                    <!-- Header -->
                                    <tr>
                                        <td style="padding: 48px 40px; text-align: center; background: linear-gradient(135deg, rgba(41, 230, 140, 0.1) 0%, rgba(15, 22, 41, 0.8) 100%); border-bottom: 2px solid rgba(41, 230, 140, 0.2);">
                                            <h1 style="color: #ffffff; margin: 0 0 12px 0; font-size: 32px; font-weight: 700; letter-spacing: -0.8px;">
                                                PENTA STUDIO
                                            </h1>
                                            <div style="height: 2px; width: 80px; background: #29E68C; margin: 0 auto 24px auto;"></div>
                                            <p style="color: #ffffff; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
                                                New Contact Request
                                            </p>
                                            <div style="display: inline-block; padding: 8px 20px; background: rgba(41, 230, 140, 0.15); border-radius: 20px; border: 1px solid rgba(41, 230, 140, 0.3);">
                                                <span style="color: #29E68C; font-size: 14px; font-weight: 600;">🚀 Opportunity Alert</span>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 20px;">
                                            
                                            <!-- Contact Info -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(41, 230, 140, 0.08) 0%, rgba(41, 230, 140, 0.03) 100%); border-radius: 12px; border: 1px solid rgba(41, 230, 140, 0.2); margin-bottom: 24px;">
                                                <tr>
                                                    <td style="padding: 18px;">
                                                        <h2 style="color: #29E68C; margin: 0 0 24px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                                            👤 Contact Details
                                                        </h2>
                                                        
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td width="100%" style="padding-bottom: 20px;">
                                                                    <p style="color: #8B92A7; font-size: 11px; font-weight: 600; text-transform: uppercase; margin: 0 0 8px 0;">First Name</p>
                                                                    <p style="color: #ffffff; font-size: 17px; font-weight: 600; margin: 0;">${firstName}</p>
                                                                </td>
                                                                </tr>
                                                               <tr> <td width="100%" style="padding-bottom: 20px;">
                                                                    <p style="color: #8B92A7; font-size: 11px; font-weight: 600; text-transform: uppercase; margin: 0 0 8px 0;">Last Name</p>
                                                                    <p style="color: #ffffff; font-size: 17px; font-weight: 600; margin: 0;">${lastName}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="100%">
                                                                    <p style="color: #8B92A7; font-size: 11px; font-weight: 600; text-transform: uppercase; margin: 0 0 8px 0;">Email</p>
                                                                    <a href="mailto:${email}" style="color: #29E68C; font-size: 15px; text-decoration: none; word-break: break-all;">${email}</a>
                                                                </td>
                                                               </tr>
                                                               <tr>
                                                                <td width="100%">
                                                                    <p style="color: #8B92A7; font-size: 11px; font-weight: 600; text-transform: uppercase; margin: 0 0 8px 0;">Phone</p>
                                                                    <a href="tel:${phoneNumber}" style="color: #29E68C; font-size: 15px; text-decoration: none;">${phoneNumber} from ${country}</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Message -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(15, 22, 41, 0.6); border-radius: 12px; border: 1px solid rgba(139, 146, 167, 0.15); margin-bottom: 32px;">
                                                <tr>
                                                    <td style="padding: 18px;">
                                                        <h2 style="color: #29E68C; margin: 0 0 18px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                                            💬 Message
                                                        </h2>
                                                        <div style="background: rgba(6, 11, 39, 0.8); padding: 20px; border-radius: 8px; border-left: 3px solid #29E68C;">
                                                            <p style="color: #E5E7EB; margin: 0; line-height: 1.7; font-size: 15px;">${message}</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Action Button -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="mailto:${email}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #29E68C 0%, #1DB874 100%); color: #0F1629; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 15px; box-shadow: 0 8px 20px rgba(41, 230, 140, 0.3);">
                                                            ✨ Reply to ${firstName}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Timestamp -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid rgba(139, 146, 167, 0.15); padding-top: 24px;">
                                                <tr>
                                                    <td align="center">
                                                        <p style="color: #6B7280; margin: 0; font-size: 13px;">
                                                            📅 ${new Date().toLocaleString(
                                                                "en-US",
                                                                {
                                                                    timeZone:
                                                                        "Africa/Cairo",
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                                }
                                                            )} (Cairo Time)
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
        });

        const emailToCustomer = await resend.emails.send({
            from: "Penta Studio <onboarding@resend.dev>",
            to: [email],
            subject: "✨ We Got Your Message!",
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background: linear-gradient(180deg, #0a0f24 0%, #060B27 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0a0f24 0%, #060B27 100%); padding: 40px 20px;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #0F1629; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                                    
                                    <!-- Hero Header -->
                                    <tr>
                                        <td style="padding: 56px 40px; text-align: center; background: linear-gradient(135deg, rgba(41, 230, 140, 0.15) 0%, rgba(15, 22, 41, 0.9) 100%);">
                                            <h1 style="color: #ffffff; margin: 0 0 16px 0; font-size: 36px; font-weight: 700; letter-spacing: -1px;">
                                                PENTA STUDIO
                                            </h1>
                                            <div style="height: 2px; width: 100px; background: #29E68C; margin: 0 auto 28px auto;"></div>
                                            <p style="color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 600;">
                                                Thanks, ${firstName}! 🎉
                                            </p>
                                            <p style="color: #29E68C; margin: 0; font-size: 16px; font-weight: 500;">
                                                We're on it!
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 48px 40px;">
                                            
                                            <!-- Welcome Message -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                                                <tr>
                                                    <td align="center">
                                                        <p style="color: #D1D5DB; font-size: 17px; line-height: 1.7; margin: 0;">
                                                            Your message is in good hands. Our team will review it and get back to you within <span style="color: #29E68C; font-weight: 600;">24 hours</span>.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Message Preview -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(41, 230, 140, 0.08) 0%, rgba(41, 230, 140, 0.02) 100%); border-radius: 12px; border: 1px solid rgba(41, 230, 140, 0.2); margin-bottom: 36px;">
                                                <tr>
                                                    <td style="padding: 28px;">
                                                        <h3 style="color: #29E68C; margin: 0 0 16px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px;">
                                                            Your Message
                                                        </h3>
                                                        <div style="background: rgba(6, 11, 39, 0.6); padding: 20px; border-radius: 8px; border-left: 3px solid #29E68C;">
                                                            <p style="color: #E5E7EB; margin: 0; line-height: 1.7; font-size: 15px; font-style: italic;">"${message}"</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- CTA -->
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td align="center" style="padding: 12px 0 36px 0;">
                                                        <p style="color: #9CA3AF; margin: 0 0 20px 0; font-size: 16px; font-weight: 500;">
                                                            Explore our work while you wait
                                                        </p>
                                                        <a href="${
                                                            process.env
                                                                .NEXT_PUBLIC_SITE_URL ||
                                                            "https://pentastudio.tech"
                                                        }/#our-work" style="display: inline-block; padding: 16px 36px; background: linear-gradient(135deg, #29E68C 0%, #1DB874 100%); color: #0F1629; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 15px; box-shadow: 0 8px 20px rgba(41, 230, 140, 0.3);">
                                                            🎨 View Portfolio
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Contact Info -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(6, 11, 39, 0.4); border-radius: 12px; padding: 24px;">
                                                <tr>
                                                    <td align="center">
                                                        <p style="color: #29E68C; margin: 0 0 16px 0; font-size: 15px; font-weight: 600;">Questions? Reach out anytime</p>
                                                        <p style="margin: 0;">
                                                            <a href="mailto:contact@pentastudio.tech" style="color: #9CA3AF; text-decoration: none; font-size: 14px; margin-right: 20px;">📧 contact@pentastudio.tech</a>
                                                            <a href="tel:+201551850855" style="color: #9CA3AF; text-decoration: none; font-size: 14px;">📞 +02 015 51850855</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="padding: 32px 40px; text-align: center; border-top: 1px solid rgba(139, 146, 167, 0.15);">
                                            <p style="color: #6B7280; margin: 0; font-size: 13px; line-height: 1.6;">
                                                <strong style="color: #29E68C;">Penta Studio</strong><br>
                                                Virkakatu 8J, 90570, Oulu, Finland • Crafting Digital Excellence Worldwide
                                            </p>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
        });

        console.log("Emails sent successfully");

        return NextResponse.json(
            { success: true, message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            {
                error: "Failed to send message",
                details: error.message || "Unknown error occurred",
            },
            { status: 500 }
        );
    }
}
