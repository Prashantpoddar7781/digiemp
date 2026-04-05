# 🚂 Railway Backend Deployment

## Step-by-Step:

1. **Go to Railway:**
   - Visit: https://railway.app
   - Click "Start a New Project"
   - Sign up/Login with GitHub

2. **Deploy from GitHub:**
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub
   - Select repository: `Prashantpoddar7781/digiemp`

3. **Configure Service:**
   - Railway will create a service automatically
   - Click on the service
   - Go to **Settings** tab
   - Set **Root Directory:** `server` ⚠️ IMPORTANT!

4. **Set Build & Start Commands:**
   - Go to **Settings** → **Deploy**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

5. **Add Environment Variables:**
   - Go to **Variables** tab
   - Click **+ New Variable**
   - Add these one by one:

```
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-vercel-app.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

   ⚠️ **Note:** Set `FRONTEND_URL` to your Vercel domain AFTER you deploy frontend (for now, use a placeholder)

6. **Get Your Backend URL:**
   - Go to **Settings** → **Networking**
   - Railway will generate a domain like: `digiemp-production.up.railway.app`
   - **Copy this URL** - you'll need it for Vercel!

7. **Wait for Deployment:**
   - Railway will automatically build and deploy
   - Check **Deployments** tab to see progress
   - When it says "Active", your backend is live!

## Test Backend:
- Visit: `https://your-backend.railway.app/health`
- Should see: `{"status":"ok","message":"DigiEmp Backend API is running"}`









