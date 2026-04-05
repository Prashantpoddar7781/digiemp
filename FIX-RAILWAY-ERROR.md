# Fix: Railway Internal Server Error

## The Problem:
Backend is deployed but returning "Internal server error". This usually means:
- Missing environment variables
- Email configuration not set
- Backend crashing on startup

## Step-by-Step Fix:

### 1. Check Railway Logs

1. Go to Railway Dashboard
2. Click on your service
3. Go to **Logs** tab
4. Look for error messages (usually in red)
5. **Share the error message** - this will tell us exactly what's wrong

### 2. Verify Environment Variables in Railway

Go to Railway → Your Service → **Variables** tab

Make sure ALL these are set:

```
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://digiemp.vercel.app

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

**Common Issues:**
- ❌ Missing `SMTP_PASS` → Backend can't send emails
- ❌ Missing `RECIPIENT_EMAIL` → Backend crashes
- ❌ Wrong `SMTP_USER` → Email auth fails
- ❌ Missing `FRONTEND_URL` → CORS issues

### 3. Check Railway Logs for Specific Errors

Look for these common errors in logs:

**Error: "Recipient email not configured"**
- Fix: Add `RECIPIENT_EMAIL` variable

**Error: "Email server configuration is invalid"**
- Fix: Check `SMTP_USER` and `SMTP_PASS` are correct

**Error: "EAUTH" or authentication failed**
- Fix: Verify Gmail App Password is correct

**Error: "Cannot find module"**
- Fix: Check build completed successfully

### 4. Restart/Redeploy

After adding/updating environment variables:

1. Railway should auto-redeploy
2. If not, go to **Deployments** tab
3. Click **Redeploy** on the latest deployment

### 5. Test Again

1. Wait for deployment to complete (Status: Active)
2. Test: `https://digiemp-backend-production.up.railway.app/health`
3. Should see: `{"status":"ok","message":"DigiEmp Backend API is running"}`

## Quick Checklist:

- [ ] All environment variables are set in Railway
- [ ] `SMTP_PASS` is correct (Gmail App Password)
- [ ] `RECIPIENT_EMAIL` is set
- [ ] `SMTP_USER` matches your Gmail
- [ ] Checked Railway logs for specific error
- [ ] Backend status shows "Active"
- [ ] Tested `/health` endpoint

## Most Likely Issue:

**Missing `RECIPIENT_EMAIL` or `SMTP_PASS` in Railway environment variables.**

The backend needs these to start properly. Check the Variables tab in Railway and make sure all are set!









