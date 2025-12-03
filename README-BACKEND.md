# DigiEmp - Full Stack Application

A digital solutions agency website with contact form backend and AI consultant.

## Project Structure

```
digiemp---digital-solutions-agency/
├── server/                 # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── index.ts       # Main server file
│   │   ├── routes/        # API routes
│   │   ├── services/      # Email service
│   │   └── validators/    # Input validation
│   ├── package.json
│   └── README.md          # Backend documentation
├── components/            # React components
├── services/             # Frontend services (Gemini AI)
├── App.tsx               # Main React component
├── package.json          # Frontend dependencies
└── DEPLOYMENT.md         # Deployment guide
```

## Features

✅ **Contact Form** - Sends email notifications when someone submits the form
✅ **AI Consultant** - Powered by Google Gemini for project consultation
✅ **Responsive Design** - Works on all devices
✅ **Modern Stack** - React, TypeScript, Vite, Express, Node.js

## Quick Start

### 1. Backend Setup

```bash
cd server
npm install
cp env.example .env
# Edit .env with your email configuration
npm run dev
```

### 2. Frontend Setup

```bash
# In root directory
npm install
# Create .env file with:
# VITE_API_URL=http://localhost:5000
# GEMINI_API_KEY=your-key
npm run dev
```

### 3. Email Configuration

For Gmail:
1. Enable 2FA on your Gmail account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use in `.env`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
   ```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Recommended Platforms:**
- **Railway** - Easiest, auto-detects backend
- **Render** - Free tier available
- **Vercel** (Frontend) + **Railway** (Backend) - Best performance

## Environment Variables

### Backend (server/.env)
- `SMTP_HOST` - Email server hostname
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password/app password
- `RECIPIENT_EMAIL` - Where to send contact forms
- `FRONTEND_URL` - Frontend URL for CORS

### Frontend (.env)
- `VITE_API_URL` - Backend API URL
- `GEMINI_API_KEY` - Google Gemini API key

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /health` - Health check

## Support

For deployment help, see DEPLOYMENT.md. For backend details, see server/README.md.

