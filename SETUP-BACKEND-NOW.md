# ⚠️ IMPORTANT: Setup Backend to Receive Emails

Your contact form is now ready, but you need to set up the backend server to actually send emails!

## Quick Setup (5 minutes)

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Create Environment File

```bash
cd server
copy env.example .env
```

### Step 3: Get Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2FA if not already enabled
3. Generate App Password → Copy the 16-character password

### Step 4: Edit `server/.env`

Open `server/.env` and add:

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

Replace:
- `your-email@gmail.com` with your Gmail address
- `your-16-char-app-password` with the app password you generated

### Step 5: Test Email Configuration

```bash
cd server
node test-email.js
```

✅ If successful, you'll receive a test email!

### Step 6: Start Backend Server

```bash
cd server
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📧 Email service: Configured
```

### Step 7: Update Frontend Environment

Create `.env` file in root directory (not in server/):

```env
VITE_API_URL=http://localhost:5000
GEMINI_API_KEY=your-gemini-api-key
```

### Step 8: Test Contact Form

1. Make sure backend is running (port 5000)
2. Make sure frontend is running (port 3000)
3. Go to http://localhost:3000
4. Fill out contact form (email is now required!)
5. Submit
6. Check your email - you should receive:
   - **Your email**: Contact form submission details
   - **Sender's email**: Confirmation that their request was received

## What Changed?

✅ Email field is now **required** (marked with red asterisk)
✅ Backend validates email is provided
✅ **Two emails are sent:**
   - One to you (Prashantpoddar29@gmail.com) with contact details
   - One to the sender with confirmation

## Troubleshooting

### "Cannot connect to backend"
- Make sure backend is running: `cd server && npm run dev`
- Check http://localhost:5000/health works
- Verify `VITE_API_URL` in frontend `.env` is `http://localhost:5000`

### "Email not sending"
- Run `node test-email.js` to test email config
- Check backend console for errors
- Verify Gmail App Password is correct

### "Email field not required"
- Hard refresh browser: `Ctrl + Shift + R`
- Check browser console for errors

