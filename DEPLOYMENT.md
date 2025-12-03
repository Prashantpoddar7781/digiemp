# Deployment Guide for DigiEmp

This guide will help you deploy both the frontend and backend to production.

## Prerequisites

- Domain name (you mentioned you already have one)
- Email account for sending contact form emails (Gmail recommended)
- Hosting account (Railway, Render, Vercel, or VPS)

## Quick Setup Options

### Option 1: Railway (Recommended - Easiest)

1. **Deploy Backend:**
   - Go to [Railway](https://railway.app)
   - Create new project from GitHub
   - Select your repository
   - Railway will auto-detect the backend in `/server` folder
   - Add environment variables (see below)
   - Deploy!

2. **Deploy Frontend:**
   - Create another service in Railway
   - Set root directory to `/` (not `/server`)
   - Build command: `npm install && npm run build`
   - Start command: `npx serve -s dist -l 3000`
   - Add environment variables:
     - `VITE_API_URL`: Your backend URL (e.g., `https://your-backend.railway.app`)
     - `GEMINI_API_KEY`: Your Gemini API key

3. **Configure Domain:**
   - In Railway, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Render

1. **Deploy Backend:**
   - Go to [Render](https://render.com)
   - Create new Web Service
   - Connect GitHub repository
   - Root Directory: `server`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variables
   - Deploy!

2. **Deploy Frontend:**
   - Create new Static Site
   - Root Directory: `/`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Add environment variables
   - Deploy!

### Option 3: Vercel (Frontend) + Railway/Render (Backend)

1. **Deploy Backend** to Railway or Render (see above)

2. **Deploy Frontend to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Framework Preset: Vite
   - Root Directory: `/`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add environment variables:
     - `VITE_API_URL`: Your backend URL
     - `GEMINI_API_KEY`: Your Gemini API key
   - Deploy!

3. **Configure Domain:**
   - In Vercel, go to Settings → Domains
   - Add your custom domain

## Environment Variables

### Backend (.env)

```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

### Frontend

```env
VITE_API_URL=https://your-backend-url.com
GEMINI_API_KEY=your-gemini-api-key
```

## Email Setup (Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "DigiEmp Backend"
   - Copy the 16-character password
3. **Use in Backend:**
   - `SMTP_USER`: Your Gmail address
   - `SMTP_PASS`: The 16-character app password (not your regular password)

## DNS Configuration

After deploying, configure your domain:

1. **Backend Subdomain (optional):**
   - Create A record or CNAME: `api.yourdomain.com` → Backend IP/URL

2. **Frontend:**
   - Create A record or CNAME: `yourdomain.com` → Frontend IP/URL
   - Create CNAME: `www.yourdomain.com` → Frontend IP/URL

## Testing

1. **Test Backend:**
   ```bash
   curl https://your-backend-url.com/health
   ```

2. **Test Contact Form:**
   - Fill out the contact form on your website
   - Check your email inbox (RECIPIENT_EMAIL)
   - You should receive a formatted email with the contact details

3. **Test AI Consultant:**
   - Click "AI Consultant" button
   - Ask a question
   - Should work if GEMINI_API_KEY is configured

## Troubleshooting

### Email not sending?
- Verify SMTP credentials
- Check if App Password is correct (for Gmail)
- Check backend logs for errors
- Test SMTP connection manually

### CORS errors?
- Make sure `FRONTEND_URL` in backend matches your frontend domain
- Include protocol (https://) in the URL

### Frontend can't reach backend?
- Verify `VITE_API_URL` is set correctly
- Check backend is running and accessible
- Check CORS configuration

## Production Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Domain configured and SSL enabled
- [ ] Environment variables set correctly
- [ ] Email sending works (test contact form)
- [ ] AI Consultant works (test chat)
- [ ] All features functional

## Support

If you encounter issues:
1. Check server logs
2. Verify environment variables
3. Test endpoints individually
4. Check DNS propagation (can take up to 48 hours)

