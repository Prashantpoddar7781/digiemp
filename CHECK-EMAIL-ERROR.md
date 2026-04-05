# Fix: 500 Error When Sending Email

## The Problem:
- ✅ Frontend is calling backend correctly (URL is correct)
- ✅ Backend is receiving the request
- ❌ Backend is failing when trying to send email (500 error)

## Step 1: Check Railway Logs

The backend is catching the error and returning a generic message. The **real error** is in Railway logs.

1. **Go to Railway Dashboard**
2. **Click on your service** (digiemp-backend)
3. **Click "Logs" tab**
4. **Look for red error messages** when you submit the contact form

The logs will show the exact email error, such as:
- "Email server configuration is invalid"
- "EAUTH" (authentication failed)
- "ECONNECTION" (connection failed)
- "Recipient email not configured"

## Common Email Errors:

### Error: "Email server configuration is invalid"
- **Fix:** Check `SMTP_USER` and `SMTP_PASS` in Railway variables

### Error: "EAUTH" or "authentication failed"
- **Fix:** Gmail App Password might be wrong or expired
- **Solution:** Generate a new App Password and update `SMTP_PASS`

### Error: "Recipient email not configured"
- **Fix:** Make sure `RECIPIENT_EMAIL` is set in Railway

### Error: "ECONNECTION" or connection timeout
- **Fix:** Check `SMTP_HOST` and `SMTP_PORT` are correct

## Step 2: Verify Railway Environment Variables

Make sure all these are set correctly:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

## Step 3: Test Email Configuration

If you see SMTP errors, the Gmail App Password might need to be regenerated:

1. Go to: https://myaccount.google.com/apppasswords
2. Generate a new App Password
3. Update `SMTP_PASS` in Railway
4. Railway will auto-redeploy

## What to Share:

Please check Railway Logs and share:
1. What error message appears when you submit the contact form?
2. Is it an SMTP/email error?
3. What does it say exactly?

This will help us fix the exact issue!









