# Fix All Issues - Complete Guide

## Issue 1: CORS Error ✅ FIXED
**Problem:** Railway only allows `digiemp.vercel.app` but Vercel preview URLs are different.

**Solution:** I've updated CORS to allow:
- Production: `https://digiemp.vercel.app`
- All preview URLs: `*.vercel.app` (pattern matching)

**Status:** Code pushed, Railway will auto-redeploy.

---

## Issue 2: Railway Frontend Service ❌ DELETE IT

**Problem:** Railway is trying to deploy frontend but it shouldn't - frontend is on Vercel only.

**Solution:**
1. **Go to Railway Dashboard**
2. **Find the "digiemp-frontend" service** (if it exists)
3. **Click on it → Settings → Delete Service**
4. **Confirm deletion**

**Why:** Frontend should ONLY be on Vercel. Railway should only have the backend service.

---

## Issue 3: Email Connection Timeout

**Problem:** SMTP connection timing out to Gmail.

**Solution:** Try port 465 with SSL (more reliable in cloud):

### Update Railway Environment Variables:

1. **Go to Railway → Your Backend Service → Variables**
2. **Update these:**
   - `SMTP_PORT`: Change from `587` to `465`
   - `SMTP_SECURE`: Change from `false` to `true`
3. **Save** - Railway will auto-redeploy

### Updated Variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
FRONTEND_URL=https://digiemp.vercel.app
```

---

## Issue 4: Vercel Preview vs Production URL

**Current Situation:**
- Production URL: `https://digiemp.vercel.app` ✅
- Preview URL: `https://digiemp-c5hgpn576-prashantpoddar7781s-projects.vercel.app`

**Solution:** 
- CORS now allows both (fixed above)
- Use production URL for testing: `https://digiemp.vercel.app`
- Preview URLs will also work now

---

## Action Items:

1. ✅ **CORS Fix** - Already pushed, wait for Railway to redeploy
2. ❌ **Delete Railway Frontend Service** - Do this now
3. ⚠️ **Update SMTP Port to 465** - Do this in Railway variables
4. ✅ **Test** - After Railway redeploys, test contact form

---

## After All Fixes:

1. **Wait 2-3 minutes** for Railway to redeploy
2. **Test health endpoint:**
   ```
   https://digiemp-backend-production.up.railway.app/health
   ```
3. **Test contact form** on: `https://digiemp.vercel.app`
4. **Check Railway logs** if email still fails

---

## Quick Checklist:

- [ ] Delete Railway frontend service (if exists)
- [ ] Update Railway SMTP_PORT to 465
- [ ] Update Railway SMTP_SECURE to true
- [ ] Wait for Railway redeploy
- [ ] Test contact form
- [ ] Check email inbox









