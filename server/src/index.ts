import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { contactRouter } from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Fix CORS to allow Vercel production and preview URLs
const getAllowedOrigins = () => {
  const frontendUrl = process.env.FRONTEND_URL;
  const allowedOrigins = ['https://digiemp.vercel.app'];
  
  // Add production URL if provided
  if (frontendUrl) {
    const cleaned = frontendUrl.trim().replace(/[^\w\s\-.:\/]/g, '');
    if (cleaned.startsWith('http://') || cleaned.startsWith('https://')) {
      if (!allowedOrigins.includes(cleaned)) {
        allowedOrigins.push(cleaned);
      }
    } else {
      const withHttps = `https://${cleaned}`;
      if (!allowedOrigins.includes(withHttps)) {
        allowedOrigins.push(withHttps);
      }
    }
  }
  
  // Allow all Vercel preview URLs (pattern: *.vercel.app)
  allowedOrigins.push(/^https:\/\/.*\.vercel\.app$/);
  
  return allowedOrigins;
};

app.use(cors({
  origin: (origin, callback) => {
    const allowed = getAllowedOrigins();
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }
    
    // Check if origin matches any allowed pattern
    const isAllowed = allowed.some(allowedOrigin => {
      if (typeof allowedOrigin === 'string') {
        return allowedOrigin === origin;
      } else if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return false;
    });
    
    if (isAllowed) {
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

