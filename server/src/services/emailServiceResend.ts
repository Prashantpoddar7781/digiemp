import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Send confirmation email to the sender
export const sendConfirmationEmailResend = async (data: ContactFormData): Promise<void> => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured');
  }

  // Normalize the sender's email from the form
  const senderEmail = data.email.toLowerCase().trim();
  console.log('📧 Sending confirmation email to sender:', senderEmail);
  console.log('📧 Original email from form:', data.email);

  // Use custom domain if configured, otherwise use Resend's test domain (limited to account owner)
  const fromAddress = process.env.RESEND_FROM_EMAIL || 'DigiEmp <onboarding@resend.dev>';
  console.log('📧 From address for confirmation:', fromAddress);

  try {
    const emailResult = await resend.emails.send({
      from: fromAddress,
      to: senderEmail, // Use the normalized sender email from the form
      subject: 'Thank you for contacting DigiEmp!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background-color: #ffffff;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                margin: -30px -30px 30px -30px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                margin: 20px 0;
              }
              .highlight {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #667eea;
                margin: 20px 0;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✅ Thank You, ${escapeHtml(data.name)}!</h1>
              </div>
              
              <div class="content">
                <p>We've received your project request and are excited to help bring your vision to life!</p>
                
                <div class="highlight">
                  <strong>Your Request Details:</strong><br>
                  Service: ${escapeHtml(data.service)}<br>
                  Submitted: ${new Date().toLocaleString()}
                </div>
                
                <p>Our team will review your request and get back to you within <strong>24 hours</strong>.</p>
                
                <p>In the meantime, feel free to explore our portfolio and learn more about what we can build for you.</p>
              </div>
              
              <div class="footer">
                <p><strong>DigiEmp - Digital Solutions Agency</strong></p>
                <p>Building digital empires, one project at a time.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    // Check if email was actually sent
    if (!emailResult || !emailResult.data || !emailResult.data.id) {
      console.error('❌ Resend API returned invalid response for confirmation email:', JSON.stringify(emailResult, null, 2));
      console.error('⚠️ Confirmation email may not have been sent');
    } else {
      console.log('✅ Confirmation email sent successfully via Resend to:', senderEmail);
      console.log('✅ Confirmation email ID:', emailResult.data.id);
      console.log('✅ Full Resend response for confirmation:', JSON.stringify(emailResult, null, 2));
    }
  } catch (error: any) {
    console.error('❌ Error sending confirmation email via Resend:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    // Don't throw - confirmation email failure shouldn't block the main email
  }
};

// Send contact email to recipient
export const sendContactEmailResend = async (data: ContactFormData): Promise<void> => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured');
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL;
  if (!recipientEmail) {
    console.error('❌ RECIPIENT_EMAIL not configured in environment variables');
    throw new Error('Recipient email not configured');
  }
  
  console.log('📧 Sending notification email to recipient:', recipientEmail);

  try {
    console.log('📧 Resend API Key present:', !!process.env.RESEND_API_KEY);
    console.log('📧 Sending to recipient:', recipientEmail);
    
    // Use custom domain if configured, otherwise use Resend's test domain (limited to account owner)
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'DigiEmp <onboarding@resend.dev>';
    console.log('📧 From address:', fromAddress);
    console.log('📧 Subject: New Project Request from', data.name);
    
    const normalizedRecipient = recipientEmail.toLowerCase().trim();
    const normalizedSender = data.email.toLowerCase().trim();
    
    console.log('📧 Normalized recipient email:', normalizedRecipient);
    console.log('📧 Normalized sender email:', normalizedSender);
    
    const emailResult = await resend.emails.send({
      from: fromAddress,
      to: normalizedRecipient, // Normalize email address
      reply_to: normalizedSender,
      subject: `New Project Request from ${data.service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background-color: #ffffff;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                margin: -30px -30px 30px -30px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: 600;
                color: #667eea;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #667eea;
                margin-top: 10px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 New Project Request</h1>
              </div>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${escapeHtml(data.name)}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${escapeHtml(data.phone)}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${escapeHtml(data.email)}</div>
              </div>
              
              <div class="field">
                <div class="label">Service Interest</div>
                <div class="value">${escapeHtml(data.service)}</div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  ${escapeHtml(data.message).replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the DigiEmp contact form.</p>
                <p>You can reply directly to this email to respond to ${data.name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    // Check if email was actually sent
    if (!emailResult || !emailResult.data || !emailResult.data.id) {
      console.error('❌ Resend API returned invalid response:', JSON.stringify(emailResult, null, 2));
      throw new Error('Resend API returned invalid response - email may not have been sent');
    }
    
    console.log('✅ Notification email sent successfully via Resend to:', normalizedRecipient);
    console.log('✅ Email ID:', emailResult.data.id);
    console.log('✅ Email subject: New Project Request from', data.name);
    console.log('✅ Full Resend response:', JSON.stringify(emailResult, null, 2));
  } catch (error: any) {
    console.error('❌ Error sending email via Resend:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
};

