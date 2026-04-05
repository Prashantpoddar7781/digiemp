# 🚀 Use Resend Instead of Gmail SMTP

## Why Resend?
Railway is blocking Gmail SMTP connections. Resend is a modern email API designed for cloud platforms and will work reliably.

## Step 1: Get Resend API Key (2 minutes)

1. **Go to:** https://resend.com
2. **Sign up** (free account - 100 emails/day free)
3. **Go to:** https://resend.com/api-keys
4. **Click "Create API Key"**
5. **Name it:** "DigiEmp Backend"
6. **Copy the API key** (starts with `re_`)

## Step 2: Add to Railway

1. **Go to Railway** → Your Backend Service → **Variables**
2. **Add new variable:**
   - Key: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx` (your API key)
3. **Save** - Railway will auto-redeploy

## Step 3: Verify Domain (Optional but Recommended)

For production, you should verify your domain:

1. **Go to:** https://resend.com/domains
2. **Add Domain:** `digiemp.vercel.app` (or your custom domain)
3. **Add DNS records** as instructed
4. **Update the from email** in the code once verified

**For now, Resend will work with their test domain!**

## Step 4: Test

1. **Wait for Railway to redeploy** (1-2 minutes)
2. **Test contact form** on: `https://digiemp.vercel.app`
3. **Check your email** - should receive both emails!

## What Changed?

- ✅ Added Resend email service
- ✅ Backend will use Resend if `RESEND_API_KEY` is set
- ✅ Falls back to SMTP if Resend key not set
- ✅ No more connection timeout issues!

## Railway Variables Needed:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
FRONTEND_URL=https://digiemp.vercel.app
```

That's it! Just add the Resend API key and it will work.









