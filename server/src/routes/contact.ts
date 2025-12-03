import { Router } from 'express';
import { sendContactEmail, sendConfirmationEmail } from '../services/emailService.js';
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

    // Send email (this will send both the notification to you and confirmation to sender)
    await sendContactEmail({
      name,
      phone,
      email,
      service,
      message
    });

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

