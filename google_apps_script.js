// ============================================================
// TRIVEXON — Contact Form Handler (Google Apps Script)
// Paste this ENTIRE code in your Google Apps Script editor
// ============================================================

var SHEET_NAME     = "Contact Submissions";
var YOUR_EMAIL     = "admin@trivexon.in";
var YOUR_NAME      = "Team Trivexon";
var SPREADSHEET_ID = "1ZTvnbY2U2-4gNsJZpuJveQ4VB_mLkFLmro3C_SxEJL8";

function doPost(e) {
  try {
    var name = e.parameter.name || "";
    var email = e.parameter.email || "";
    var phone = e.parameter.phone || "";
    var company = e.parameter.company || "";
    var service = e.parameter.service || "";
    var message = e.parameter.message || "";
    var time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // ── 1. Save to Google Sheet ──────────────────────────────
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Company", "Service", "Message"]);
    }
    sheet.appendRow([time, name, email, phone, company, service, message]);

    // ── 2. Send notification to YOU (Trivexon) ───────────────
    GmailApp.sendEmail(
      YOUR_EMAIL,
      "📬 New Contact Form Submission — " + name,
      "",
      {
        htmlBody: buildAdminEmail(name, email, phone, company, service, message, time),
        name: "Trivexon Website"
      }
    );

    // ── 3. Send Thank You email to USER ──────────────────────
    if (email) {
      GmailApp.sendEmail(
        email,
        "Thank you for reaching out! — Trivexon",
        "",
        {
          htmlBody: buildThankYouEmail(name),
          name: YOUR_NAME
        }
      );
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Admin Notification Email Template ──────────────────────────
function buildAdminEmail(name, email, phone, company, service, message, time) {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #0d0d1a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(124,58,237,0.3);">
    <div style="background: linear-gradient(135deg, #7C3AED, #06B6D4); padding: 28px 32px;">
      <h2 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">📬 New Contact Form Submission</h2>
      <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">${time}</p>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        ${row("👤 Name", name)}
        ${row("📧 Email", email)}
        ${row("📱 Phone", phone || "—")}
        ${row("🏢 Company", company || "—")}
        ${row("🛠 Service", service || "—")}
      </table>
      <div style="margin-top: 20px; background: rgba(255,255,255,0.04); border-left: 3px solid #7C3AED; border-radius: 8px; padding: 16px;">
        <p style="color: #94A3B8; font-size: 12px; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="color: #E2E8F0; font-size: 14px; margin: 0; line-height: 1.6;">${message}</p>
      </div>
      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${email}" style="background: linear-gradient(135deg, #7C3AED, #06B6D4); color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-block;">Reply to ${name}</a>
      </div>
    </div>
  </div>`;
}

function row(label, value) {
  return `
  <tr>
    <td style="padding: 10px 0; color: #64748B; font-size: 13px; width: 130px; vertical-align: top;">${label}</td>
    <td style="padding: 10px 0; color: #E2E8F0; font-size: 13px; font-weight: 600;">${value}</td>
  </tr>`;
}

// ── User Thank You Email Template ───────────────────────────────
function buildThankYouEmail(name) {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d1a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(124,58,237,0.3);">
    <div style="background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%); padding: 40px 32px; text-align: center;">
      <div style="font-size: 48px; margin-bottom: 12px;">🙏</div>
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">Thank You, ${name}!</h1>
      <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0; font-size: 14px;">We've received your message.</p>
    </div>

    <div style="padding: 36px 32px;">
      <p style="color: #CBD5E1; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
        Thank you for reaching out! Our team will review your message and get back to you within <strong style="color: white;">2–4 business hours.</strong>
      </p>

      <div style="background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.2); border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
        <p style="color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px;">In the meantime, you can:</p>
        <ul style="color: #CBD5E1; font-size: 14px; margin: 0; padding-left: 20px; line-height: 2;">
          <li>Explore our <a href="https://trivexon.com/services" style="color: #7C3AED;">services</a></li>
          <li>Check our <a href="https://trivexon.com/clients" style="color: #7C3AED;">client success stories</a></li>
          <li>Reach us directly on <a href="https://wa.me/918655685272" style="color: #7C3AED;">WhatsApp</a></li>
        </ul>
      </div>

      <p style="color: #64748B; font-size: 13px; margin: 0;">
        Warm regards,<br/>
        <strong style="color: #E2E8F0;">Team Trivexon</strong><br/>
        <span style="color: #7C3AED;">trivexon.com</span>
      </p>
    </div>

    <div style="background: rgba(255,255,255,0.03); padding: 16px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06);">
      <p style="color: #475569; font-size: 11px; margin: 0;">© ${new Date().getFullYear()} Trivexon. All rights reserved.</p>
    </div>
  </div>`;
}
