# Quick Start - DigiEmp

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies
```bash
npm install
cd server && npm install && cd ..
```

### 2. Setup Backend Email
```bash
cd server
cp env.example .env
# Edit .env with your Gmail App Password
```

**Get Gmail App Password:**
- https://myaccount.google.com/apppasswords
- Copy 16-char password → `SMTP_PASS` in `server/.env`

### 3. Setup Frontend
```bash
# Create .env in root
echo "VITE_API_URL=http://localhost:5000" > .env
echo "GEMINI_API_KEY=your-key" >> .env
```

**Get Gemini API Key:**
- https://aistudio.google.com/apikey

### 4. Run
```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
npm run dev
```

### 5. Test
- Frontend: http://localhost:3000
- Backend: http://localhost:5000/health
- Submit contact form → Check your email!

## 📧 Email Setup (Gmail)

1. Enable 2FA on Gmail
2. Generate App Password
3. Use in `server/.env`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
   ```

## 🌐 Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Railway (easiest)
- Render
- Vercel + Railway

## ❓ Need Help?

- Full setup: [SETUP.md](./SETUP.md)
- Deployment: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Backend docs: [server/README.md](./server/README.md)

