# Check Railway Logs for Exact Error

## The Issue:
You're still getting "Internal server error" even after fixing FRONTEND_URL. This means there's another issue causing the backend to crash.

## Step 1: Check Railway Logs

1. **Go to Railway Dashboard**
2. **Click on your service** (digiemp-backend)
3. **Click on "Logs" tab** (next to Variables)
4. **Look for red error messages**

The logs will show the **exact error** that's causing the crash.

## Common Errors to Look For:

### Error: "Recipient email not configured"
- **Fix:** Make sure `RECIPIENT_EMAIL` is set in Railway variables

### Error: "Email server configuration is invalid"
- **Fix:** Check `SMTP_USER` and `SMTP_PASS` are correct

### Error: "EAUTH" or "authentication failed"
- **Fix:** Gmail App Password might be wrong or expired

### Error: "Cannot find module" or "Module not found"
- **Fix:** Build might have failed - check deployment logs

### Error: "ECONNECTION" or connection timeout
- **Fix:** SMTP settings might be wrong

## Step 2: Check What You See

**Please share:**
1. What error message appears in Railway Logs?
2. Is the backend status "Active" or "Failed"?
3. What do you see when you test `/health` endpoint?

## Quick Test:

Try accessing the health endpoint:
```
https://digiemp-backend-production.up.railway.app/health
```

- If you see `{"status":"ok","message":"DigiEmp Backend API is running"}` → Backend is working, issue is with the contact endpoint
- If you see "Internal server error" → Backend is crashing on startup
- If you see 404 → Backend isn't deployed correctly

## Most Likely Issues:

1. **Email service failing on startup** - Check logs for SMTP errors
2. **Missing environment variable** - Check all variables are set
3. **Build failed** - Check deployment logs

**Please check Railway Logs and share the error message you see!**









