# Which Vercel URL to Use?

## You'll See 2 URLs in Vercel:

### 1. **Deployment URL** (Unique per deployment)
- Format: `digiemp-abc123xyz.vercel.app`
- Example: `digiemp-git-main-prashantpoddar7781.vercel.app`
- This is a unique URL for each deployment
- Changes with each new deployment

### 2. **Production URL** (Main URL)
- Format: `your-project-name.vercel.app`
- Example: `digiemp.vercel.app`
- This is your main/production URL
- Always points to the latest production deployment
- **This is the one you want!** ✅

---

## Which One to Use in Railway?

**Use the Production URL** (the main one, not the deployment-specific one)

### How to Find It:

1. Go to your Vercel project dashboard
2. Look at the **"Domains"** section or the main project page
3. You'll see something like:
   ```
   Production: digiemp.vercel.app ✅ (Use this!)
   Preview: digiemp-abc123.vercel.app (Don't use this)
   ```

### In Railway:

Set `FRONTEND_URL` to:
```
https://digiemp.vercel.app
```
(Replace `digiemp` with your actual project name)

---

## Quick Check:

- ✅ **Use:** `https://your-project-name.vercel.app` (main production URL)
- ❌ **Don't use:** `https://your-project-abc123.vercel.app` (deployment-specific URL)

The production URL is stable and won't change with each deployment!









