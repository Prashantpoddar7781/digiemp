# Debug Email Connection Issue

## What Error Are You Seeing Now?

Please check Railway logs and share:

1. **What error message appears** when you submit the contact form?
2. **Is it still "Connection timeout"** or a different error?
3. **What does the Railway backend log show?**

## Steps to Check:

### 1. Check Railway Backend Logs

1. Go to Railway → Your Backend Service
2. Click **"Logs"** tab
3. Submit the contact form on your website
4. **Copy the error message** that appears in the logs

### 2. Test Backend Health

Visit:
```
https://digiemp-backend-production.up.railway.app/health
```

Should see: `{"status":"ok","message":"DigiEmp Backend API is running"}`

### 3. Verify SMTP Settings

In Railway → Variables, make sure:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

## Possible Issues:

### Still Getting Connection Timeout?
- Railway might be blocking outbound SMTP connections
- Gmail might be blocking Railway's IP addresses
- Need to use a different email service or SMTP relay

### Getting Authentication Error?
- Gmail App Password might be wrong
- Need to regenerate App Password

### Getting Different Error?
- Share the exact error message from Railway logs

## Alternative Solutions:

If Gmail SMTP keeps timing out, we might need to:
1. Use a different email service (SendGrid, Mailgun, etc.)
2. Use Gmail OAuth2 instead of App Password
3. Use a SMTP relay service

**Please share the exact error from Railway logs so I can fix it!**









