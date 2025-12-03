# Setup Guide - DigiEmp

Complete setup instructions to get your DigiEmp website running locally and ready for deployment.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Gmail account (or other email provider)
- Google Gemini API key (for AI Consultant feature)

## Step 1: Clone and Install

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

## Step 2: Configure Backend

1. **Copy environment file:**
   ```bash
   cd server
   cp env.example .env
   ```

2. **Edit `server/.env` with your email settings:**

   For Gmail (Recommended):
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
   ```

3. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in with your Gmail account
   - Select "Mail" and "Other (Custom name)"
   - Name it "DigiEmp Backend"
   - Copy the 16-character password
   - Paste it as `SMTP_PASS` in `.env`

## Step 3: Configure Frontend

1. **Create `.env` file in root directory:**
   ```bash
   # In root directory (not server/)
   touch .env
   ```

2. **Add to `.env`:**
   ```env
   VITE_API_URL=http://localhost:5000
   GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. **Get Gemini API Key:**
   - Go to: https://aistudio.google.com/apikey
   - Create a new API key
   - Copy and paste as `GEMINI_API_KEY` in `.env`

## Step 4: Run Locally

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Backend will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
# In root directory
npm run dev
```
Frontend will run on http://localhost:3000

## Step 5: Test

1. **Test Backend:**
   - Open: http://localhost:5000/health
   - Should see: `{"status":"ok","message":"DigiEmp Backend API is running"}`

2. **Test Contact Form:**
   - Go to: http://localhost:3000
   - Scroll to Contact section
   - Fill out and submit the form
   - Check your email (RECIPIENT_EMAIL) - you should receive the contact form details

3. **Test AI Consultant:**
   - Click "AI Consultant" button
   - Ask a question about your project
   - Should get a response from Gemini AI

## Troubleshooting

### Backend won't start?
- Check if port 5000 is already in use
- Verify `.env` file exists in `server/` directory
- Check all required environment variables are set

### Email not sending?
- Verify Gmail App Password is correct (16 characters, no spaces)
- Make sure 2FA is enabled on Gmail
- Check backend console for error messages
- Try testing SMTP connection manually

### Frontend can't connect to backend?
- Make sure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env` matches backend URL
- Check browser console for CORS errors

### AI Consultant not working?
- Verify `GEMINI_API_KEY` is set correctly
- Check browser console for API errors
- Make sure API key has proper permissions

## Next Steps

Once everything works locally:
1. See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment
2. Configure your domain
3. Set up production environment variables
4. Deploy!

## File Structure

```
digiemp---digital-solutions-agency/
├── .env                    # Frontend environment (create this)
├── server/
│   ├── .env                # Backend environment (create from env.example)
│   └── src/
├── components/
├── App.tsx
└── package.json
```

## Support

If you encounter issues:
1. Check all environment variables are set
2. Verify both servers are running
3. Check console logs for errors
4. Review DEPLOYMENT.md for production setup

