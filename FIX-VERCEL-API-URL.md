# Fix: Vercel API URL Missing https://

## The Problem:
Frontend is calling backend without `https://`:
```
digiemp-backend-production.up.railway.app/api/contact
```

Should be:
```
https://digiemp-backend-production.up.railway.app/api/contact
```

## Quick Fix (Choose One):

### Option 1: Update Vercel Environment Variable (Recommended)

1. **Go to Vercel Dashboard**
2. **Select your project** (digiemp)
3. **Settings** → **Environment Variables**
4. **Find `VITE_API_URL`**
5. **Edit it** to include `https://`:
   ```
   https://digiemp-backend-production.up.railway.app
   ```
6. **Save** - Vercel will auto-redeploy

### Option 2: Code Fix (Already Done)

I've updated the code to automatically add `https://` if missing. This is pushed to GitHub and Vercel will auto-redeploy.

## After Fix:

1. **Wait for Vercel to redeploy** (1-2 minutes)
2. **Hard refresh your website:** `Ctrl + Shift + R`
3. **Test contact form again**
4. **Check console** - should now show:
   ```
   Sending to: https://digiemp-backend-production.up.railway.app/api/contact
   ```

## Verify:

In Vercel → Environment Variables, `VITE_API_URL` should be:
```
https://digiemp-backend-production.up.railway.app
```

NOT:
```
digiemp-backend-production.up.railway.app
```









