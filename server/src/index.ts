import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { contactRouter } from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Fix CORS to handle invalid characters
const getFrontendUrl = () => {
  const url = process.env.FRONTEND_URL;
  if (!url) return '*';
  
  // Remove any invalid characters and ensure it's a valid URL
  const cleaned = url.trim().replace(/[^\w\s\-.:\/]/g, '');
  
  // If it doesn't start with http, add https://
  if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
    return `https://${cleaned}`;
  }
  
  return cleaned;
};

app.use(cors({
  origin: getFrontendUrl(),
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

