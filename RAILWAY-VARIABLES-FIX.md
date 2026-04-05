# Railway Variables - Issues Found

## ❌ Issue Found:

### `FRONTEND_URL` is missing `https://`

**Current:** `digiemp.vercel.app`  
**Should be:** `https://digiemp.vercel.app`

This can cause CORS issues and prevent the frontend from connecting to the backend.

---

## ✅ Correct Variables:

Here's what your Railway variables should be:

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

---

## How to Fix:

1. **Go to Railway → Variables tab**
2. **Find `FRONTEND_URL`**
3. **Click the three dots (⋮) → Edit**
4. **Change value from:** `digiemp.vercel.app`
5. **To:** `https://digiemp.vercel.app`
6. **Save**

Railway will auto-redeploy after you save.

---

## All Other Variables Look Correct:

✅ `NODE_ENV=production` - Correct  
✅ `PORT=5000` - Correct  
✅ `RECIPIENT_EMAIL=Prashantpoddar29@gmail.com` - Correct  
✅ `SMTP_HOST=smtp.gmail.com` - Correct  
✅ `SMTP_PASS=wltpngmkodszgnjz` - Correct  
✅ `SMTP_PORT=587` - Correct  
✅ `SMTP_SECURE=false` - Correct  
✅ `SMTP_USER=Prashantpoddar29@gmail.com` - Correct (if visible)

---

## After Fixing:

1. Wait for Railway to redeploy (should be automatic)
2. Check deployment status shows "Active"
3. Test: `https://digiemp-backend-production.up.railway.app/health`
4. Should see: `{"status":"ok","message":"DigiEmp Backend API is running"}`
5. Test contact form on your website









