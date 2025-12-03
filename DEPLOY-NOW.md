# 🚀 Deploy DigiEmp - Step by Step

## Prerequisites Checklist
- [x] Contact form working locally
- [x] Email configuration tested
- [ ] Code pushed to GitHub
- [ ] Railway account (free)
- [ ] Vercel account (free)

---

## Step 1: Push Code to GitHub

### If you haven't already:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment - Contact form with email"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**Important:** Make sure `.env` files are NOT committed (they're in `.gitignore`)

---

## Step 2: Deploy Backend to Railway

### 2.1 Create Railway Account
1. Go to: https://railway.app
2. Sign up with GitHub
3. Click "New Project"

### 2.2 Deploy Backend
1. Select "Deploy from GitHub repo"
2. Choose your repository
3. **IMPORTANT:** Click on the service → Settings
4. Set **Root Directory:** `server`
5. Railway will auto-detect Node.js

### 2.3 Configure Build Settings
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

### 2.4 Add Environment Variables
Click "Variables" tab and add:

```
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://yourdomain.com

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

**⚠️ Important:** Replace `FRONTEND_URL` with your actual Vercel domain after deploying frontend!

### 2.5 Get Backend URL
1. Go to Settings → Networking
2. Copy the generated domain (e.g., `digiemp-backend-production.up.railway.app`)
3. **Save this URL** - you'll need it for Vercel!

---

## Step 3: Deploy Frontend to Vercel

### 3.1 Create Vercel Account
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Click "Add New..." → "Project"

### 3.2 Import Repository
1. Select your GitHub repository
2. Framework Preset: **Vite** (should auto-detect)
3. Root Directory: `./` (leave as is)

### 3.3 Configure Build Settings
- **Build Command:** `npm run build` (default)
- **Output Directory:** `dist` (default)
- **Install Command:** `npm install` (default)

### 3.4 Add Environment Variables
Click "Environment Variables" and add:

```
VITE_API_URL=https://your-backend.railway.app
GEMINI_API_KEY=AIzaSyA6zYuMMPr0KhrITacjvHB5RYa9YSvpAto
```

**⚠️ Important:** Replace `your-backend.railway.app` with your actual Railway backend URL from Step 2.5!

### 3.5 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Copy your Vercel URL (e.g., `digiemp.vercel.app`)

---

## Step 4: Update Backend CORS

### 4.1 Update Railway Environment Variables
1. Go back to Railway
2. Update `FRONTEND_URL` to your Vercel domain:
   ```
   FRONTEND_URL=https://digiemp.vercel.app
   ```
3. Railway will auto-redeploy

---

## Step 5: Configure Custom Domain (Optional)

### 5.1 Vercel Domain
1. Go to Vercel Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### 5.2 Update Railway FRONTEND_URL
Update `FRONTEND_URL` in Railway to your custom domain

### 5.3 Update Vercel VITE_API_URL (if using custom backend domain)
If you set up a custom domain for Railway backend, update `VITE_API_URL` in Vercel

---

## Step 6: Test Production

1. **Test Contact Form:**
   - Go to your live website
   - Submit contact form
   - Check your email (should receive both emails)

2. **Test AI Consultant:**
   - Click "AI Consultant" button
   - Should work if GEMINI_API_KEY is set

---

## Troubleshooting

### Backend not receiving requests?
- Check Railway logs
- Verify `FRONTEND_URL` matches your Vercel domain
- Check CORS settings

### Frontend can't connect to backend?
- Verify `VITE_API_URL` in Vercel matches Railway backend URL
- Check browser console for errors
- Make sure backend is deployed and running

### Email not sending in production?
- Check Railway logs for SMTP errors
- Verify all email environment variables are set
- Test SMTP connection

---

## Quick Reference

**Railway Backend:**
- URL: `https://your-backend.railway.app`
- Environment: Production
- Port: 5000 (auto-handled by Railway)

**Vercel Frontend:**
- URL: `https://your-project.vercel.app`
- Environment: Production
- Build: Automatic on git push

**Environment Variables Needed:**

**Railway (Backend):**
- `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL`
- `FRONTEND_URL` (your Vercel domain)

**Vercel (Frontend):**
- `VITE_API_URL` (your Railway backend URL)
- `GEMINI_API_KEY`

---

## Success Checklist

- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set in both
- [ ] Backend URL updated in Vercel
- [ ] Frontend URL updated in Railway
- [ ] Contact form tested in production
- [ ] Emails received successfully
- [ ] Custom domain configured (optional)

🎉 **You're live!**

