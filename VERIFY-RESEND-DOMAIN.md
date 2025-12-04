# How to Verify Your Domain in Resend

## The Problem
Resend's `onboarding@resend.dev` domain can only send emails to your account email (`prashantpoddar29@gmail.com`). This is why:
- ✅ Notification emails work (they go to your email)
- ❌ Confirmation emails fail (they go to the sender's email)

## The Solution
Verify your domain in Resend so you can send emails to any recipient.

## Steps to Verify Your Domain

### 1. Go to Resend Domains
Visit: https://resend.com/domains

### 2. Add Your Domain
1. Click **"Add Domain"**
2. Enter your domain (e.g., `digiemp.com`)
3. Click **"Add"**

### 3. Add DNS Records
Resend will show you DNS records to add. You need to add these to your domain's DNS settings:

**Example records:**
- **TXT Record** for domain verification
- **DKIM Records** (usually 3 CNAME records)
- **SPF Record** (TXT record)
- **DMARC Record** (TXT record)

### 4. Add Records to Your Domain Provider
1. Go to your domain provider (where you bought the domain)
2. Find DNS settings / DNS management
3. Add all the records Resend shows you
4. Save changes

### 5. Wait for Verification
- DNS changes can take a few minutes to 48 hours
- Resend will automatically verify when DNS propagates
- Check status in Resend dashboard

### 6. Update Railway Environment Variable
Once verified, add this to Railway environment variables:

**Variable Name:** `RESEND_FROM_EMAIL`  
**Value:** `DigiEmp <noreply@yourdomain.com>`

Replace `yourdomain.com` with your actual domain.

**Example:**
- If your domain is `digiemp.com`, use: `DigiEmp <noreply@digiemp.com>`
- If your domain is `mydomain.com`, use: `DigiEmp <noreply@mydomain.com>`

### 7. Redeploy
After adding the environment variable, Railway will automatically redeploy.

## Testing
After redeployment, test the contact form with a different email address. Both emails should work:
- ✅ Notification email to you (with contact form details)
- ✅ Confirmation email to sender (thank you message)

## Alternative: Use a Subdomain
If you don't want to use your main domain, you can use a subdomain:
- `mail.yourdomain.com`
- `noreply.yourdomain.com`
- `contact.yourdomain.com`

Just add the DNS records for the subdomain instead.

## Need Help?
- Resend Docs: https://resend.com/docs/dashboard/domains/introduction
- Resend Support: Check their help section

