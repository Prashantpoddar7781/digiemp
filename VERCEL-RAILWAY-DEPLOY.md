# Deploy to Vercel (Frontend) + Railway (Backend)

Complete guide to deploy your DigiEmp website.

## Part 1: Local Testing First ⚠️

**IMPORTANT:** Test locally before deploying to ensure emails work!

### Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Step 2: Setup Backend Email

1. **Create backend environment file:**
   ```bash
   cd server
   cp env.example .env
   ```

2. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Enable 2FA if needed
   - Generate App Password → Copy 16-character password

3. **Edit `server/.env`:**
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
   ```

### Step 3: Test Email Configuration

```bash
cd server
node test-email.js
```

✅ If successful, you'll receive a test email!

### Step 4: Test Locally

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
# In root directory
# Create .env file with:
# VITE_API_URL=http://localhost:5000
# GEMINI_API_KEY=your-key

npm run dev
```

**Test:**
1. Open http://localhost:3000
2. Submit contact form
3. Check your email - you should receive it!

---

## Part 2: Deploy Backend to Railway 🚂

### Step 1: Prepare Repository

1. **Push your code to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Add backend and deployment config"
   git push
   ```

### Step 2: Deploy to Railway

1. **Go to Railway:**
   - Visit: https://railway.app
   - Sign up/Login with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Service:**
   - Railway should auto-detect it's a Node.js project
   - **Root Directory:** Set to `server` (important!)
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`

4. **Add Environment Variables:**
   Click "Variables" tab and add:
   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://yourdomain.com
   
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
   ```

5. **Deploy:**
   - Railway will automatically deploy
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://your-backend.railway.app`)

6. **Get Backend URL:**
   - Go to Settings → Networking
   - Copy the generated domain (e.g., `digiemp-backend-production.up.railway.app`)
   - Or add your custom domain

### Step 3: Test Backend

1. **Health Check:**
   - Open: `https://your-backend.railway.app/health`
   - Should see: `{"status":"ok","message":"DigiEmp Backend API is running"}`

2. **Test Contact Endpoint (optional):**
   ```bash
   curl -X POST https://your-backend.railway.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","phone":"1234567890","service":"Test","message":"Test message"}'
   ```

---

## Part 3: Deploy Frontend to Vercel ⚡

### Step 1: Prepare Frontend

1. **Make sure your code is pushed to GitHub**

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
   - **Install Command:** `npm install` (default)

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL=https://your-backend.railway.app
   GEMINI_API_KEY=your-gemini-api-key
   ```
   ⚠️ **Important:** Replace `your-backend.railway.app` with your actual Railway backend URL!

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Vercel will give you a URL (e.g., `digiemp.vercel.app`)

### Step 3: Configure Custom Domain

1. **Add Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `yourdomain.com`)
   - Follow DNS configuration instructions

2. **Update Backend CORS:**
   - Go back to Railway
   - Update `FRONTEND_URL` environment variable to your Vercel domain
   - Redeploy backend (or it will auto-redeploy)

---

## Part 4: Final Configuration 🔧

### Update Environment Variables

**Railway (Backend):**
- Update `FRONTEND_URL` to your Vercel domain:
  ```
  FRONTEND_URL=https://yourdomain.com
  ```

**Vercel (Frontend):**
- Make sure `VITE_API_URL` points to your Railway backend:
  ```
  VITE_API_URL=https://your-backend.railway.app
  ```

### Test Production

1. **Visit your website:** `https://yourdomain.com`
2. **Test Contact Form:**
   - Fill out and submit
   - Check your email (RECIPIENT_EMAIL)
   - You should receive the contact form!

3. **Test AI Consultant:**
   - Click "AI Consultant" button
   - Should work if GEMINI_API_KEY is set

---

## Troubleshooting

### Backend not receiving requests?
- Check Railway logs
- Verify `FRONTEND_URL` in Railway matches your Vercel domain
- Check CORS settings

### Frontend can't connect to backend?
- Verify `VITE_API_URL` in Vercel matches Railway backend URL
- Check browser console for errors
- Make sure backend is deployed and running

### Email not sending in production?
- Check Railway logs for SMTP errors
- Verify all email environment variables are set correctly
- Test SMTP connection (use test-email.js locally first)

### Domain not working?
- DNS propagation can take up to 48 hours
- Verify DNS records are correct
- Check Vercel domain configuration

---

## Quick Checklist ✅

**Before Deploying:**
- [ ] Tested locally - emails working
- [ ] Code pushed to GitHub
- [ ] Gmail App Password ready

**Railway (Backend):**
- [ ] Project created and connected to GitHub
- [ ] Root directory set to `server`
- [ ] All environment variables added
- [ ] Backend deployed and accessible
- [ ] Health check works

**Vercel (Frontend):**
- [ ] Project imported from GitHub
- [ ] Framework preset: Vite
- [ ] Environment variables added (VITE_API_URL, GEMINI_API_KEY)
- [ ] Frontend deployed
- [ ] Custom domain configured

**Final:**
- [ ] Updated FRONTEND_URL in Railway
- [ ] Tested contact form in production
- [ ] Received email from contact form
- [ ] AI Consultant working

---

## Support

If you encounter issues:
1. Check Railway logs (Backend)
2. Check Vercel build logs (Frontend)
3. Verify all environment variables
4. Test endpoints individually
5. Review LOCAL-TEST.md for local testing help

