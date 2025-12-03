# DigiEmp Backend API

Backend server for handling contact form submissions and sending email notifications.

## Features

- ✅ Contact form submission endpoint
- ✅ Email notifications using Nodemailer
- ✅ Input validation with Zod
- ✅ CORS enabled for frontend integration
- ✅ Error handling and logging
- ✅ Support for SMTP and Gmail OAuth2

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your email configuration:

```bash
cp .env.example .env
```

### 3. Email Configuration

#### Option A: Gmail with App Password (Recommended)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use these settings in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
RECIPIENT_EMAIL=Prashantpoddar29@gmail.com
```

#### Option B: Other Email Providers

For other providers (Outlook, Yahoo, custom SMTP), update the SMTP settings accordingly:

- **Outlook**: `smtp-mail.outlook.com`, port 587
- **Yahoo**: `smtp.mail.yahoo.com`, port 587
- **Custom SMTP**: Use your provider's SMTP settings

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### POST `/api/contact`

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+1234567890",
  "email": "john@example.com",
  "service": "Websites & Apps",
  "message": "I need a website for my business"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully. We will get back to you soon!"
}
```

### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "DigiEmp Backend API is running"
}
```

## Deployment

### Deploy to Railway

1. Push your code to GitHub
2. Connect your repository to Railway
3. Add environment variables in Railway dashboard
4. Deploy!

### Deploy to Render

1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy!

### Deploy to VPS (DigitalOcean, AWS EC2, etc.)

1. SSH into your server
2. Clone the repository
3. Install Node.js and npm
4. Run `npm install && npm run build`
5. Use PM2 or systemd to run the server
6. Set up Nginx as a reverse proxy
7. Configure SSL with Let's Encrypt

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 5000) |
| `NODE_ENV` | Environment (development/production) | No |
| `FRONTEND_URL` | Frontend URL for CORS | No |
| `SMTP_HOST` | SMTP server hostname | Yes |
| `SMTP_PORT` | SMTP server port | Yes |
| `SMTP_SECURE` | Use TLS/SSL | Yes |
| `SMTP_USER` | SMTP username | Yes |
| `SMTP_PASS` | SMTP password/app password | Yes |
| `RECIPIENT_EMAIL` | Email to receive contact forms | Yes |

## Troubleshooting

### Email not sending?

1. Check your SMTP credentials
2. Verify your email provider allows SMTP access
3. For Gmail, make sure you're using an App Password, not your regular password
4. Check server logs for detailed error messages

### CORS errors?

Make sure `FRONTEND_URL` in `.env` matches your frontend domain.

