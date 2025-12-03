# 🚀 START HERE - Quick Guide

Follow these steps in order to test locally, then deploy.

## 📋 Step-by-Step Process

### Phase 1: Local Testing (Do This First!)

1. **Install dependencies:**
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

2. **Setup backend email:**
   ```bash
   cd server
   cp env.example .env
   # Edit .env with your Gmail App Password
   ```

3. **Test email:**
   ```bash
   cd server
   node test-email.js
   ```
   ✅ If successful, check your email inbox!

4. **Start backend:**
   ```bash
   cd server
   npm run dev
   ```

5. **Start frontend (new terminal):**
   ```bash
   # Create .env in root with:
   # VITE_API_URL=http://localhost:5000
   # GEMINI_API_KEY=your-key
   
   npm run dev
   ```

6. **Test contact form:**
   - Open http://localhost:3000
   - Submit contact form
   - Check your email!

---

### Phase 2: Deploy to Production

Once local testing works:

1. **Deploy Backend to Railway:**
   - See: **[VERCEL-RAILWAY-DEPLOY.md](./VERCEL-RAILWAY-DEPLOY.md)** - Part 2
   - Get your Railway backend URL

2. **Deploy Frontend to Vercel:**
   - See: **[VERCEL-RAILWAY-DEPLOY.md](./VERCEL-RAILWAY-DEPLOY.md)** - Part 3
   - Use Railway backend URL in Vercel env vars

3. **Configure Domain:**
   - See: **[VERCEL-RAILWAY-DEPLOY.md](./VERCEL-RAILWAY-DEPLOY.md)** - Part 4

---

## 📚 Detailed Guides

- **[LOCAL-TEST.md](./LOCAL-TEST.md)** - Complete local testing guide
- **[VERCEL-RAILWAY-DEPLOY.md](./VERCEL-RAILWAY-DEPLOY.md)** - Complete deployment guide
- **[QUICK-START.md](./QUICK-START.md)** - 5-minute reference

---

## ⚡ Quick Commands

```bash
# Test email configuration
cd server && node test-email.js

# Start backend
cd server && npm run dev

# Start frontend
npm run dev
```

---

## 🆘 Need Help?

1. Check **[LOCAL-TEST.md](./LOCAL-TEST.md)** for local testing issues
2. Check **[VERCEL-RAILWAY-DEPLOY.md](./VERCEL-RAILWAY-DEPLOY.md)** for deployment issues
3. Verify all environment variables are set correctly

