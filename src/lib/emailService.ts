import nodemailer from 'nodemailer';

export interface EmailEnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  course: string;
  learningMode?: string;
  preferredTime?: string;
  message?: string;
  type?: string;
  pageUrl?: string;
  createdAt?: string;
}

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  skipped?: boolean;
  reason?: string;
  error?: string;
}

/**
 * Validates and retrieves the SMTP configuration from environment variables.
 * Returns null if required credentials are not configured.
 */
function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  const fromEmail =
    process.env.SMTP_FROM_EMAIL?.trim() ||
    (user ? `"Cambridge Academy Admissions" <${user}>` : undefined);

  const admissionsEmail =
    process.env.ADMISSIONS_EMAIL?.trim() ||
    process.env.NOTIFICATION_EMAIL?.trim() ||
    'info@cambridgeacademyofenglish.com';

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure,
    auth: { user, pass },
    fromEmail: fromEmail || user,
    admissionsEmail,
  };
}

/**
 * Sends an email notification to the Admissions Team when a website enquiry is submitted.
 * Designed for full compatibility with Hostinger Business Email SMTP (smtp.hostinger.com:465).
 */
export async function sendAdmissionsNotification(
  payload: EmailEnquiryPayload
): Promise<EmailSendResult> {
  const config = getSmtpConfig();

  // If SMTP is not yet configured, log clearly and skip without throwing errors.
  if (!config) {
    console.warn(
      '[EmailService] Email not sent – SMTP credentials missing (SMTP_HOST, SMTP_USER, or SMTP_PASS not configured).'
    );
    return {
      success: false,
      skipped: true,
      reason: 'Email not sent – SMTP credentials missing',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const cleanPhone = payload.phone.replace(/[^0-9+]/g, '');
    const waPhone = cleanPhone.replace(/[^0-9]/g, '');
    const submissionTime = payload.createdAt
      ? new Date(payload.createdAt).toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium',
        })
      : new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium',
        });

    const formType = (payload.type || 'Enquiry').toUpperCase();
    const subject = `[${formType}] New Lead: ${payload.name} — ${payload.course || 'General Enquiry'}`;

    const textContent = `
NEW STUDENT LEAD RECEIVED
==================================================
Date & Time:      ${submissionTime} (IST)
Form Type:        ${formType}
Course:           ${payload.course || 'General Enquiry'}
Learning Mode:    ${payload.learningMode || 'Not Specified'}
Preferred Time:   ${payload.preferredTime || 'Anytime'}

STUDENT DETAILS:
--------------------------------------------------
Full Name:        ${payload.name}
Phone Number:     ${payload.phone}
WhatsApp Link:    https://wa.me/${waPhone}
Email Address:    ${payload.email || 'Not Provided'}

MESSAGE / NOTES:
--------------------------------------------------
${payload.message || 'No additional message provided.'}

PAGE SOURCE:
--------------------------------------------------
Submitted From:   ${payload.pageUrl || 'Website'}
==================================================
Cambridge Academy of English Admissions Automation
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">
    <!-- HEADER -->
    <tr>
      <td style="background-color: #0a192f; padding: 24px 32px; text-align: left; border-bottom: 3px solid #d4af37;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
          Cambridge Academy of English
        </h1>
        <p style="color: #d4af37; margin: 4px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
          Admissions Desk Notification &bull; ${formType}
        </p>
      </td>
    </tr>

    <!-- LEAD ALERT BANNER -->
    <tr>
      <td style="padding: 24px 32px 12px 32px;">
        <div style="background-color: #f8fafc; border-left: 4px solid #0a192f; padding: 14px 18px; border-radius: 4px;">
          <p style="margin: 0; font-size: 15px; font-weight: 700; color: #0a192f;">
            New Candidate: <span style="color: #1e40af;">${payload.name}</span>
          </p>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">
            Interested in: <strong style="color: #0f172a;">${payload.course || 'General Enquiry'}</strong> (${payload.learningMode || 'Mode Unspecified'})
          </p>
        </div>
      </td>
    </tr>

    <!-- DETAILS TABLE -->
    <tr>
      <td style="padding: 12px 32px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 14px; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td width="35%" style="color: #64748b; font-weight: 600;">Full Name:</td>
            <td width="65%" style="color: #0f172a; font-weight: 700;">${payload.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Phone Number:</td>
            <td>
              <a href="tel:${cleanPhone}" style="color: #0284c7; text-decoration: none; font-weight: 700;">${payload.phone}</a>
              &nbsp;&bull;&nbsp;
              <a href="https://wa.me/${waPhone}" style="color: #16a34a; text-decoration: none; font-weight: 700;">Chat on WhatsApp &rarr;</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Email Address:</td>
            <td>
              ${
                payload.email
                  ? `<a href="mailto:${payload.email}" style="color: #0284c7; text-decoration: none;">${payload.email}</a>`
                  : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'
              }
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Course Selected:</td>
            <td style="color: #0f172a; font-weight: 700;">${payload.course || 'General Enquiry'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Learning Mode:</td>
            <td style="color: #0f172a;">${payload.learningMode || 'Flexible / Unspecified'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Preferred Timing:</td>
            <td style="color: #0f172a;">${payload.preferredTime || 'Anytime'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Submission Time:</td>
            <td style="color: #475569; font-size: 13px;">${submissionTime} (IST)</td>
          </tr>
          ${
            payload.pageUrl
              ? `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="color: #64748b; font-weight: 600;">Submitted On:</td>
            <td style="color: #475569; font-size: 12px; word-break: break-all;">${payload.pageUrl}</td>
          </tr>`
              : ''
          }
        </table>
      </td>
    </tr>

    <!-- MESSAGE BLOCK -->
    <tr>
      <td style="padding: 12px 32px 24px 32px;">
        <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">
          Student Query / Message:
        </p>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #334155;">
          ${
            payload.message
              ? payload.message.replace(/\n/g, '<br/>')
              : '<em style="color: #94a3b8;">No additional message submitted.</em>'
          }
        </div>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="background-color: #f8fafc; padding: 18px 32px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
        This automated notification was generated by the <strong>Cambridge Academy of English</strong> website admissions gateway.
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const info = await transporter.sendMail({
      from: config.fromEmail,
      to: config.admissionsEmail,
      replyTo: payload.email || undefined,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.info(`[EmailService] Notification successfully delivered to ${config.admissionsEmail}. MessageId: ${info.messageId}`);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    // Log error safely without exposing password
    console.error('[EmailService] SMTP delivery error:', errorMsg);
    return {
      success: false,
      error: errorMsg,
    };
  }
}

/**
 * Diagnostic utility to verify SMTP connectivity without sending a message.
 */
export async function verifySmtpConnection(): Promise<{
  configured: boolean;
  connected: boolean;
  error?: string;
}> {
  const config = getSmtpConfig();
  if (!config) {
    return { configured: false, connected: false, error: 'SMTP credentials not configured in environment.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
      connectionTimeout: 8000,
    });
    await transporter.verify();
    return { configured: true, connected: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return { configured: true, connected: false, error: errorMsg };
  }
}

