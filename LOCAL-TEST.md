# Local Testing Guide

Test your email setup locally before deploying.

## Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

## Step 2: Setup Backend Email Configuration

1. **Create backend environment file:**
   ```bash
   cd server
   cp env.example .env
   ```

2. **Edit `server/.env` file:**
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   
   # Gmail Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
   ```

3. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Enable 2FA if not already enabled
   - Select "Mail" → "Other (Custom name)"
   - Name it "DigiEmp Backend"
   - Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
   - Paste it in `SMTP_PASS` (you can remove spaces)

## Step 3: Test Email Configuration

```bash
cd server
node test-email.js
```

✅ If successful, you'll see:
- "SMTP connection successful!"
- "Test email sent successfully!"
- Check your email inbox!

❌ If it fails, check the error message and fix the configuration.

## Step 4: Start Backend Server

```bash
cd server
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📧 Email service: Configured
```

## Step 5: Setup Frontend

1. **Create `.env` file in root directory:**
   ```bash
   # In root directory (not server/)
   ```

2. **Add to `.env`:**
   ```env
   VITE_API_URL=http://localhost:5000
   GEMINI_API_KEY=your-gemini-api-key
   ```

## Step 6: Start Frontend

```bash
# Make sure you're in root directory
npm run dev
```

Frontend will run on http://localhost:3000

## Step 7: Test Contact Form

1. Open http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form:
   - Name: Test User
   - Phone: +1234567890
   - Email: test@example.com
   - Service: Websites & Apps
   - Message: This is a test message
4. Click "Send Request"
5. Check your email inbox (RECIPIENT_EMAIL)
6. You should receive a formatted email with the contact details!

## Troubleshooting

### Email test fails?
- **"EAUTH" error:** Wrong password or not using App Password
- **"ECONNECTION" error:** Check internet or SMTP settings
- **"Missing variables":** Make sure `.env` file exists in `server/` directory

### Backend won't start?
- Check if port 5000 is already in use
- Verify `.env` file exists in `server/` directory

### Contact form not sending?
- Make sure backend is running (check http://localhost:5000/health)
- Check browser console for errors
- Verify `VITE_API_URL` in frontend `.env` is `http://localhost:5000`

## Next: Deploy to Production

Once email is working locally:
1. ✅ Deploy backend to Railway (see DEPLOYMENT.md)
2. ✅ Deploy frontend to Vercel (see DEPLOYMENT.md)
3. ✅ Update environment variables in production
4. ✅ Test production contact form

