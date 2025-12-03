import { Router } from 'express';
import { sendContactEmail, sendConfirmationEmail } from '../services/emailService.js';
import { sendContactEmailResend, sendConfirmationEmailResend } from '../services/emailServiceResend.js';
import { validateContactForm } from '../validators/contactValidator.js';

export const contactRouter = Router();

contactRouter.post('/', async (req, res) => {
  try {
    console.log('Received contact form data:', JSON.stringify(req.body, null, 2));
    
    // Validate input
    const validationResult = validateContactForm(req.body);
    
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationResult.errors
      });
    }

    const { name, phone, email, service, message } = validationResult.data;

    // Use Resend if API key is available, otherwise fall back to SMTP
    if (process.env.RESEND_API_KEY) {
      console.log('Using Resend for email delivery');
      console.log('Recipient email:', process.env.RECIPIENT_EMAIL);
      
      // Send notification email to recipient (you) - this is the important one
      try {
        await sendContactEmailResend({
          name,
          phone,
          email,
          service,
          message
        });
        console.log('✅ Notification email sent to recipient');
      } catch (error) {
        console.error('❌ Failed to send notification email to recipient:', error);
        throw error; // Re-throw to return error to user
      }
      
      // Send confirmation email to sender (optional - don't fail if this fails)
      try {
        await sendConfirmationEmailResend({
          name,
          phone,
          email,
          service,
          message
        });
        console.log('✅ Confirmation email sent to sender');
      } catch (error) {
        console.error('⚠️ Failed to send confirmation email (non-critical):', error);
        // Don't throw - confirmation email failure is not critical
      }
    } else {
      console.log('Using SMTP for email delivery');
      // Send email via SMTP (this will send both the notification to you and confirmation to sender)
      await sendContactEmail({
        name,
        phone,
        email,
        service,
        message
      });
    }

    res.json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send contact form. Please try again later.'
    });
  }
});

