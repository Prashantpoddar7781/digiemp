# Connect digiemp.in Domain to Your Application

This guide will help you connect your `digiemp.in` domain to:
1. **Frontend** (Vercel) - Your website
2. **Backend** (Railway) - Your API (optional, can use Railway URL)
3. **Resend** - For sending emails from your domain

---

## Step 1: Connect Domain to Vercel (Frontend)

### 1.1 Add Domain in Vercel
1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your **digiemp** project
3. Go to **Settings** → **Domains**
4. Click **"Add Domain"**
5. Enter: `digiemp.in`
6. Click **"Add"**

### 1.2 Add DNS Records in GoDaddy

Vercel will show you DNS records to add. You need to add these in GoDaddy:

**Option A: Use A Record (Recommended)**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** Vercel's IP address (Vercel will show this)
- **TTL:** 600 (or default)

**Option B: Use CNAME (Easier)**
- **Type:** CNAME
- **Name:** @ (or leave blank)
- **Value:** `cname.vercel-dns.com`
- **TTL:** 600 (or default)

**For www subdomain:**
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com`
- **TTL:** 600 (or default)

### 1.3 Add DNS Records in GoDaddy
1. Go to https://www.godaddy.com/
2. Sign in to your account
3. Go to **My Products** → **Domains**
4. Find `digiemp.in` and click **"DNS"** or **"Manage DNS"**
5. Click **"Add"** to add each record Vercel shows you
6. Save all records

### 1.4 Wait for DNS Propagation
- DNS changes can take a few minutes to 48 hours
- Usually takes 5-30 minutes
- Vercel will show status: "Valid Configuration" when ready

### 1.5 Update Vercel Environment Variable
Once domain is connected, update in Vercel:
- **Variable:** `VITE_API_URL`
- **Value:** `https://your-railway-url.railway.app` (keep Railway URL for now, or use custom domain if you set one up)

---

## Step 2: Connect Domain to Railway (Backend - Optional)

You can either:
- **Option A:** Use Railway's default URL (easiest, no setup needed)
- **Option B:** Use custom domain (requires DNS setup)

### Option A: Use Railway URL (Recommended for now)
- No DNS changes needed
- Just use the Railway URL in `VITE_API_URL` in Vercel

### Option B: Use Custom Domain
1. In Railway, go to your service
2. Go to **Settings** → **Networking**
3. Click **"Generate Domain"** or **"Add Custom Domain"**
4. Enter: `api.digiemp.in` (or `backend.digiemp.in`)
5. Railway will show you a CNAME record
6. Add CNAME record in GoDaddy:
   - **Type:** CNAME
   - **Name:** api (or backend)
   - **Value:** Railway's CNAME value
   - **TTL:** 600

---

## Step 3: Verify Domain in Resend (For Email)

This is **REQUIRED** to send confirmation emails to form senders.

### 3.1 Add Domain in Resend
1. Go to https://resend.com/domains
2. Click **"Add Domain"**
3. Enter: `digiemp.in`
4. Click **"Add"**

### 3.2 Add DNS Records in GoDaddy

Resend will show you several DNS records. Add ALL of them:

**1. Domain Verification (TXT Record)**
- **Type:** TXT
- **Name:** @ (or leave blank)
- **Value:** (Resend will show this - something like `resend-verification=...`)
- **TTL:** 600

**2. DKIM Records (3 CNAME records)**
- **Type:** CNAME
- **Name:** `resend._domainkey` (or similar)
- **Value:** (Resend will show this)
- **TTL:** 600

- **Type:** CNAME
- **Name:** (Resend will show - usually another domainkey)
- **Value:** (Resend will show this)
- **TTL:** 600

- **Type:** CNAME
- **Name:** (Resend will show - usually another domainkey)
- **Value:** (Resend will show this)
- **TTL:** 600

**3. SPF Record (TXT Record)**
- **Type:** TXT
- **Name:** @ (or leave blank)
- **Value:** `v=spf1 include:resend.com ~all`
- **TTL:** 600

**4. DMARC Record (TXT Record)**
- **Type:** TXT
- **Name:** `_dmarc`
- **Value:** `v=DMARC1; p=none; rua=mailto:prashantpoddar29@gmail.com`
- **TTL:** 600

### 3.3 Add All Records in GoDaddy
1. Go back to GoDaddy DNS settings
2. Add each record Resend shows you
3. Make sure to copy the exact values from Resend
4. Save all records

### 3.4 Wait for Verification
- Resend will automatically verify when DNS propagates
- Check status in Resend dashboard
- Usually takes 5-30 minutes, can take up to 48 hours

### 3.5 Update Railway Environment Variable
Once verified, add to Railway:
- **Variable Name:** `RESEND_FROM_EMAIL`
- **Value:** `DigiEmp <noreply@digiemp.in>`

Railway will automatically redeploy.

---

## Step 4: Update Frontend URL in Railway

After connecting domain to Vercel, update Railway:
- **Variable Name:** `FRONTEND_URL`
- **Value:** `https://digiemp.in` (or `https://www.digiemp.in` if you set up www)

---

## Summary of DNS Records Needed

In GoDaddy, you'll need to add:

### For Vercel (Frontend):
- A record or CNAME for `@` (root domain)
- CNAME for `www` subdomain

### For Resend (Email):
- TXT record for domain verification
- 3 CNAME records for DKIM
- TXT record for SPF
- TXT record for DMARC

### For Railway (Backend - Optional):
- CNAME for `api` or `backend` subdomain (if using custom domain)

---

## Testing

After everything is set up:

1. **Test Frontend:**
   - Visit `https://digiemp.in` - should show your website

2. **Test Backend:**
   - Visit `https://digiemp.in/api/health` (if using custom domain)
   - Or use Railway URL: `https://your-railway-url.railway.app/health`

3. **Test Email:**
   - Submit contact form with a different email address
   - Both notification and confirmation emails should work

---

## Need Help?

- **GoDaddy DNS Help:** https://www.godaddy.com/help/manage-dns-records-680
- **Vercel Domain Docs:** https://vercel.com/docs/concepts/projects/domains
- **Resend Domain Docs:** https://resend.com/docs/dashboard/domains/introduction
- **Railway Custom Domain:** Check Railway docs for custom domain setup

---

## Quick Checklist

- [ ] Domain added to Vercel
- [ ] DNS records added in GoDaddy for Vercel
- [ ] Frontend accessible at digiemp.in
- [ ] Domain added to Resend
- [ ] DNS records added in GoDaddy for Resend
- [ ] Domain verified in Resend
- [ ] RESEND_FROM_EMAIL added to Railway
- [ ] FRONTEND_URL updated in Railway
- [ ] Tested contact form with different email
- [ ] Both emails working (notification + confirmation)

