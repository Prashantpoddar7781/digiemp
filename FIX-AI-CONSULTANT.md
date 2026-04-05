# Fix AI Consultant

## What Was Fixed

The AI Consultant was not working because:
1. It was trying to use `process.env.API_KEY` which doesn't work in the browser
2. The code needed to use Vite's environment variables (`import.meta.env.VITE_GEMINI_API_KEY`)

## Changes Made

1. **Updated `services/geminiService.ts`:**
   - Changed from `process.env.API_KEY` to `import.meta.env.VITE_GEMINI_API_KEY`
   - Fixed the initialization to happen inside the function (not top-level await)
   - Using the correct `@google/genai` package API

2. **Updated `vite.config.ts`:**
   - Added `import.meta.env.VITE_GEMINI_API_KEY` to the define section

## Next Steps

### For Local Development:
1. Make sure you have a `.env` file in the root directory
2. Add: `VITE_GEMINI_API_KEY=AIzaSyA6zYuMMPr0KhrITacjvHB5RYa9YSvpAto`
3. Restart the dev server: `npm run dev`

### For Vercel (Production):
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add a new variable:
   - **Name:** `VITE_GEMINI_API_KEY`
   - **Value:** `AIzaSyA6zYuMMPr0KhrITacjvHB5RYa9YSvpAto`
   - **Environment:** Production, Preview, Development (select all)
3. Redeploy your project (Vercel will auto-redeploy after adding the variable)

## Testing

After setting the environment variable:
1. Open your website
2. Click "AI Consultant" button
3. Type a message and send it
4. You should get a response from the AI

## Troubleshooting

If it still doesn't work:
1. Check browser console (F12) for errors
2. Verify the environment variable is set correctly in Vercel
3. Make sure the variable name is exactly `VITE_GEMINI_API_KEY` (case-sensitive)
4. After adding the variable in Vercel, wait for the redeploy to complete









