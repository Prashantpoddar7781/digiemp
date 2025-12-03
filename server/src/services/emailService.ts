import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

// Create reusable transporter
const createTransporter = () => {
  // Check if using Gmail OAuth2 or SMTP
  if (process.env.EMAIL_SERVICE === 'gmail' && process.env.GMAIL_CLIENT_ID) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
    });
  }

  // Standard SMTP configuration
  const port = parseInt(process.env.SMTP_PORT || '587');
  const isSecure = process.env.SMTP_SECURE === 'true';
  
  const config: any = {
    host: process.env.SMTP_HOST,
    port: port,
    secure: isSecure, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Connection timeout settings for Railway/production
    connectionTimeout: 10000, // 10 seconds (shorter for faster failure)
    greetingTimeout: 5000, // 5 seconds
    socketTimeout: 10000, // 10 seconds
  };
  
  // For port 465 (SSL), use different TLS settings
  if (isSecure && port === 465) {
    config.tls = {
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    };
  } else {
    // For port 587 (TLS)
    config.requireTLS = true;
    config.tls = {
      rejectUnauthorized: false
    };
  }
  
  return nodemailer.createTransport(config);
};

// Send confirmation email to the sender
export const sendConfirmationEmail = async (data: ContactFormData): Promise<void> => {
  const transporter = createTransporter();

  const confirmationMailOptions = {
    from: `DigiEmp <${process.env.SMTP_USER || process.env.EMAIL_USER}>`,
    to: data.email,
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
    text: `
Thank you for contacting DigiEmp!

We've received your project request for: ${data.service}

Our team will review your request and get back to you within 24 hours.

Best regards,
DigiEmp Team
    `.trim()
  };

  try {
    await transporter.sendMail(confirmationMailOptions);
    console.log('✅ Confirmation email sent to:', data.email);
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    // Don't throw - confirmation email failure shouldn't block the main email
  }
};

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;
  
  if (!recipientEmail) {
    throw new Error('Recipient email not configured');
  }

  const transporter = createTransporter();

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('✅ Email server is ready to send messages');
  } catch (error) {
    console.error('❌ Email server configuration error:', error);
    throw new Error('Email server configuration is invalid');
  }

  const mailOptions = {
    from: `DigiEmp Contact Form <${process.env.SMTP_USER || process.env.EMAIL_USER}>`,
    to: recipientEmail,
    replyTo: data.email,
    subject: `New Project Request from ${data.name} - ${data.service}`,
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
    text: `
New Project Request from DigiEmp Contact Form

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service Interest: ${data.service}

Message:
${data.message}

---
This email was sent from the DigiEmp contact form.
    `.trim()
  };

  try {
    // Send email to recipient (you)
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to recipient:', info.messageId);
    
    // Send confirmation email to sender
    await sendConfirmationEmail(data);
    
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};

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

