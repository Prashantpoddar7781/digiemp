# Troubleshooting Guide

## Website Not Working on Localhost?

### ✅ Quick Fixes

1. **Dependencies Not Installed?**
   ```bash
   npm install
   ```

2. **Server Not Running?**
   ```bash
   npm run dev
   ```
   Should see: `Local: http://localhost:3000/`

3. **Port Already in Use?**
   - Close other applications using port 3000
   - Or change port in `vite.config.ts`:
     ```ts
     server: {
       port: 3001, // Change to different port
     }
     ```

4. **Browser Cache?**
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or open in incognito/private window

5. **Check Browser Console:**
   - Press `F12` to open DevTools
   - Check Console tab for errors
   - Check Network tab for failed requests

### Common Issues

#### "Cannot find module" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

#### "Port 3000 already in use"
```bash
# Find and kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.ts
```

#### Blank page / White screen
- Check browser console for errors
- Verify `index.html` exists
- Check if React is mounting correctly
- Look for JavaScript errors in console

#### Styles not loading
- Tailwind CSS is loaded via CDN in `index.html`
- Check network tab to see if CDN is loading
- Verify internet connection

#### AI Consultant not working
- Check if `GEMINI_API_KEY` is set in `.env`
- Check browser console for API errors
- Verify API key is valid

### Still Not Working?

1. **Check if server is actually running:**
   ```bash
   # Should see output like:
   # VITE v6.x.x  ready in xxx ms
   # ➜  Local:   http://localhost:3000/
   ```

2. **Try accessing directly:**
   - Open: http://localhost:3000
   - Or: http://127.0.0.1:3000

3. **Check for TypeScript errors:**
   ```bash
   npm run build
   ```
   This will show any compilation errors

4. **Verify file structure:**
   ```
   ✓ index.html
   ✓ index.tsx
   ✓ App.tsx
   ✓ vite.config.ts
   ✓ package.json
   ```

### Getting Help

If still having issues:
1. Check browser console (F12) for errors
2. Check terminal where `npm run dev` is running
3. Share error messages
4. Verify Node.js version: `node --version` (should be 18+)

