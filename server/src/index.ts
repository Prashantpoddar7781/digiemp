import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { contactRouter } from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Fix CORS to allow Vercel production and preview URLs
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }
    
    // Always allow Vercel domains (production and preview)
    const vercelPattern = /^https:\/\/.*\.vercel\.app$/;
    
    // Check if it's a Vercel domain
    if (vercelPattern.test(origin)) {
      return callback(null, true);
    }
    
    // Check if it matches the configured FRONTEND_URL
    const frontendUrl = process.env.FRONTEND_URL;
    if (frontendUrl) {
      const cleaned = frontendUrl.trim().replace(/[^\w\s\-.:\/]/g, '');
      let configuredUrl = cleaned;
      
      if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
        configuredUrl = `https://${cleaned}`;
      }
      
      if (origin === configuredUrl) {
        return callback(null, true);
      }
    }
    
    // Default: allow all in development, deny in production
    if (process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'DigiEmp Backend API is running' });
});

// Routes
app.use('/api/contact', contactRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.SMTP_HOST ? 'Configured' : 'Not configured'}`);
});

