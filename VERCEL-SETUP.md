# ⚡ Vercel Frontend Deployment

## Step-by-Step:

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Log In"
   - Sign up/Login with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select: `Prashantpoddar7781/digiemp`
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add these variables:

**Variable 1:**
- Key: `VITE_API_URL`
- Value: `https://your-backend.railway.app`
  ⚠️ Replace `your-backend.railway.app` with your actual Railway backend URL!

**Variable 2:**
- Key: `GEMINI_API_KEY`
- Value: `AIzaSyA6zYuMMPr0KhrITacjvHB5RYa9YSvpAto`

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (1-2 minutes)
   - Vercel will give you a URL like: `digiemp.vercel.app`

6. **Get Your Frontend URL:**
   - Copy your Vercel deployment URL
   - You'll need this to update Railway's `FRONTEND_URL`

## After Deployment:

1. **Update Railway CORS:**
   - Go back to Railway
   - Update `FRONTEND_URL` variable to your Vercel URL
   - Railway will auto-redeploy

2. **Test:**
   - Visit your Vercel URL
   - Submit contact form
   - Check your email!









