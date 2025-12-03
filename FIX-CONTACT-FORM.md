# Fix: Contact Form Not Working

## Quick Fix Steps:

### 1. Restart Frontend (IMPORTANT!)
The frontend needs to be restarted to read the `.env` file:

1. **Stop the frontend** (press `Ctrl+C` in the terminal where `npm run dev` is running)
2. **Start it again:**
   ```bash
   npm run dev
   ```

### 2. Check Browser Console
1. Open http://localhost:3000
2. Press `F12` to open DevTools
3. Go to **Console** tab
4. Try submitting the contact form
5. Look for any error messages

### 3. Verify Backend is Running
```bash
# Check if backend is on port 5000
netstat -ano | findstr :5000
```

### 4. Test Backend Directly
The backend is working (we tested it). The issue is likely:
- Frontend not restarted after creating `.env`
- Browser cache
- CORS issue (but backend allows localhost:3000)

## Common Issues:

### Issue: "Failed to fetch" or Network Error
**Solution:** 
- Make sure backend is running: `cd server && npm run dev`
- Check `VITE_API_URL` in `.env` is `http://localhost:5000`
- Restart frontend after creating `.env`

### Issue: "Cannot read property" or undefined
**Solution:**
- Restart frontend to load environment variables
- Hard refresh browser: `Ctrl + Shift + R`

### Issue: Form submits but no email
**Solution:**
- Check backend terminal for errors
- Verify email configuration in `server/.env`
- Check spam folder

## Quick Test:
1. Restart frontend: `npm run dev`
2. Open http://localhost:3000
3. Open browser console (F12)
4. Submit form
5. Check console for errors
6. Check backend terminal for logs

