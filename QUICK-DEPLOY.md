# ⚡ Quick Deployment Guide

## Your Environment Variables (Save These!)

### For Railway (Backend):
```
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-vercel-domain.vercel.app

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Prashantpoddar29@gmail.com
SMTP_PASS=wltpngmkodszgnjz
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

### For Vercel (Frontend):
```
VITE_API_URL=https://your-backend.railway.app
GEMINI_API_KEY=AIzaSyA6zYuMMPr0KhrITacjvHB5RYa9YSvpAto
```

---

## Step 1: Push to GitHub

```bash
# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend to Railway

1. Go to: https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub repo
4. Select your repository
5. **Settings → Root Directory:** Set to `server`
6. **Variables tab:** Add all backend environment variables above
7. **Settings → Networking:** Copy the generated domain (your backend URL)

---

## Step 3: Deploy Frontend to Vercel

1. Go to: https://vercel.com
2. Sign up with GitHub
3. Add New → Project
4. Import your repository
5. Framework: Vite (auto-detected)
6. **Environment Variables:** Add frontend variables above
   - Replace `your-backend.railway.app` with actual Railway URL
7. Deploy!

---

## Step 4: Update CORS

1. Go back to Railway
2. Update `FRONTEND_URL` to your Vercel domain
3. Railway auto-redeploys

---

## Step 5: Test

1. Visit your Vercel URL
2. Submit contact form
3. Check email - should receive both emails!

---

## Need Help?

See **DEPLOY-NOW.md** for detailed step-by-step instructions.









