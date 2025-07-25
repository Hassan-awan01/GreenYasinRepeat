# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to handle contact form submissions and send automated responses.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>New Contact Form Submission</title>
  </head>
  <body>
    <h2>New Contact Form Submission</h2>

    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>

    <hr />
    <p><em>This message was sent from your website contact form.</em></p>
  </body>
</html>
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/utils/emailjs-config.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and submit
4. Check your email for the notification

## Contact Form Features

The updated contact form includes:

- ✅ **Full Name field** - User's full name
- ✅ **Email field** - User's email address
- ✅ **Message field** - User's message
- ✅ **Form validation** - Client-side validation
- ✅ **EmailJS integration** - Automated email sending
- ✅ **Success/Error messages** - User feedback
- ✅ **Responsive design** - Works on all devices
- ✅ **Consistent styling** - Matches your site's design

The form maintains the existing design patterns and animations from your website while providing a simple and effective contact solution.
