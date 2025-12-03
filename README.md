# DigiEmp - Digital Solutions Agency

A full-stack website with contact form backend and AI consultant powered by Google Gemini.

## 📋 Quick Setup Steps

### Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Step 2: Configure Backend (Email Setup)

1. **Create backend environment file:**
   ```bash
   cd server
   cp env.example .env
   ```

2. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Enable 2FA if not already enabled
   - Generate App Password → Copy the 16-character password

3. **Edit `server/.env` with your settings:**
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

### Step 3: Configure Frontend

1. **Create `.env` file in root directory:**
   ```bash
   # In root directory (not in server/)
   ```

2. **Add to `.env`:**
   ```env
   VITE_API_URL=http://localhost:5000
   GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. **Get Gemini API Key:**
   - Go to: https://aistudio.google.com/apikey
   - Create API key → Copy and paste in `.env`

### Step 4: Run the Application

**Open TWO terminals:**

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
✅ Backend running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
# Make sure you're in root directory
npm run dev
```
✅ Frontend running on http://localhost:3000

### Step 5: Test Everything

1. **Test Backend:** Open http://localhost:5000/health
2. **Test Contact Form:** Submit form → Check your email!
3. **Test AI Consultant:** Click "AI Consultant" button

## 🧪 Local Testing First

**IMPORTANT:** Test email functionality locally before deploying!

See **[LOCAL-TEST.md](./LOCAL-TEST.md)** for step-by-step local testing guide.

Quick test:
```bash
cd server
npm install
cp env.example .env
# Edit .env with your Gmail settings
node test-email.js  # Test email configuration
```

## 🚀 Deployment

Ready to deploy? See **[VERCEL-RAILWAY-DEPLOY.md](./VERCEL-RAILWAY-DEPLOY.md)** for:
- ✅ **Vercel (Frontend) + Railway (Backend)** - Recommended setup
- Complete step-by-step deployment guide
- Environment variable configuration
- Custom domain setup

## 📚 Documentation

- **[QUICK-START.md](./QUICK-START.md)** - 5-minute quick reference
- **[SETUP.md](./SETUP.md)** - Detailed setup guide with troubleshooting
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment instructions
- **[server/README.md](./server/README.md)** - Backend API documentation

## ✨ Features

- ✅ Contact form with email notifications
- ✅ AI Consultant (Google Gemini)
- ✅ Responsive design
- ✅ Production-ready backend

## 🆘 Need Help?

1. Check [SETUP.md](./SETUP.md) for detailed troubleshooting
2. Verify all environment variables are set correctly
3. Make sure both servers are running
4. Check console logs for errors
