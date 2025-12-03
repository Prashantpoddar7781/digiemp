// Quick email test script
// Run: node test-email.js

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const testEmail = async () => {
  console.log('🧪 Testing Email Configuration...\n');

  // Check environment variables
  const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'RECIPIENT_EMAIL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing environment variables:', missing.join(', '));
    console.log('\n📝 Make sure you have created server/.env file with:');
    console.log('   - SMTP_HOST');
    console.log('   - SMTP_USER');
    console.log('   - SMTP_PASS');
    console.log('   - RECIPIENT_EMAIL\n');
    process.exit(1);
  }

  console.log('✅ Environment variables found');
  console.log(`   SMTP Host: ${process.env.SMTP_HOST}`);
  console.log(`   SMTP User: ${process.env.SMTP_USER}`);
  console.log(`   Recipient: ${process.env.RECIPIENT_EMAIL}\n`);

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Verify connection
    console.log('🔌 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    // Send test email
    console.log('📧 Sending test email...');
    const info = await transporter.sendMail({
      from: `DigiEmp Test <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: '🧪 DigiEmp Email Test - SUCCESS!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #667eea;">✅ Email Test Successful!</h2>
          <p>If you're reading this, your email configuration is working correctly!</p>
          <p><strong>Test Details:</strong></p>
          <ul>
            <li>SMTP Host: ${process.env.SMTP_HOST}</li>
            <li>Sent from: ${process.env.SMTP_USER}</li>
            <li>Time: ${new Date().toLocaleString()}</li>
          </ul>
          <p style="color: #28a745; font-weight: bold;">🎉 Your contact form will now send emails successfully!</p>
        </div>
      `,
      text: 'Email test successful! Your contact form configuration is working.'
    });

    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Check your inbox: ${process.env.RECIPIENT_EMAIL}\n`);
    console.log('🎉 Email configuration is working! You can now test the contact form.\n');
    
  } catch (error) {
    console.error('\n❌ Error sending email:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Common fixes:');
      console.error('   - For Gmail: Make sure you\'re using an App Password, not your regular password');
      console.error('   - Verify 2FA is enabled on your Gmail account');
      console.error('   - Check that SMTP_USER and SMTP_PASS are correct');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection issue:');
      console.error('   - Check your internet connection');
      console.error('   - Verify SMTP_HOST and SMTP_PORT are correct');
    }
    
    process.exit(1);
  }
};

testEmail();

