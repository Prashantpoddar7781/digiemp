# Fix: Email Not Working in Production

## The Problem:
Console shows 404 errors when trying to reach the backend API.

## Quick Fixes:

### 1. Check Backend URL in Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Check `VITE_API_URL` value
5. It should be: `https://digiemp-backend-production.up.railway.app`
   - Make sure it starts with `https://`
   - Make sure there's no trailing slash
   - Make sure it matches your Railway backend URL exactly

### 2. Test Backend Health Endpoint

Open in browser:
```
https://digiemp-backend-production.up.railway.app/health
```

Should see:
```json
{"status":"ok","message":"DigiEmp Backend API is running"}
```

If you get 404, the backend isn't deployed correctly.

### 3. Test Backend Contact Endpoint

Try this in browser console or use curl:
```
https://digiemp-backend-production.up.railway.app/api/contact
```

If you get 404, the route isn't set up correctly.

### 4. Check Railway Backend

1. Go to Railway Dashboard
2. Check if backend is "Active" and running
3. Check **Logs** tab for any errors
4. Verify environment variables are set correctly

### 5. Update Vercel Environment Variable

If the backend URL is wrong:

1. Go to Vercel → Settings → Environment Variables
2. Edit `VITE_API_URL`
3. Set it to: `https://digiemp-backend-production.up.railway.app`
4. **Redeploy** (or wait for auto-redeploy)

### 6. Check CORS Settings

In Railway, make sure `FRONTEND_URL` is set to:
```
https://digiemp.vercel.app
```

### 7. Common Issues:

**Issue:** Backend URL missing `https://`
- Fix: Add `https://` prefix

**Issue:** Trailing slash in URL
- Fix: Remove trailing slash (no `/` at the end)

**Issue:** Wrong backend URL
- Fix: Copy exact URL from Railway → Settings → Networking

**Issue:** Backend not deployed
- Fix: Check Railway deployment status

**Issue:** Environment variable not updated
- Fix: Redeploy Vercel after changing environment variables

## Step-by-Step Fix:

1. **Get correct Railway backend URL:**
   - Railway → Your Service → Settings → Networking
   - Copy the domain (e.g., `digiemp-backend-production.up.railway.app`)

2. **Update Vercel:**
   - Vercel → Settings → Environment Variables
   - Update `VITE_API_URL` to: `https://your-backend-url.railway.app`
   - Redeploy

3. **Verify Railway:**
   - Check `FRONTEND_URL` is set to: `https://digiemp.vercel.app`
   - Check backend is running (Status: Active)

4. **Test:**
   - Visit: `https://digiemp-backend-production.up.railway.app/health`
   - Should see success message
   - Then test contact form on your website









