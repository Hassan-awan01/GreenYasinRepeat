# Career Form Setup Guide with Resume Upload

This guide will help you set up EmailJS to handle career applications with resume file uploads.

## Step 1: Create EmailJS Account (if not already done)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Set Up Email Service for Career Applications

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" (or use existing service)
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** for career applications

## Step 3: Create Career Application Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure for career applications:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>New Job Application</title>
  </head>
  <body>
    <h2>New Job Application Received</h2>

    <p><strong>Applicant Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Position Applied For:</strong> {{subject}}</p>
    <p><strong>Experience Summary:</strong></p>
    <p>{{summary}}</p>
    <p><strong>Resume File:</strong> {{resume_filename}} ({{resume_size}})</p>

    <hr />
    <p><em>This application was submitted through your career form.</em></p>
  </body>
</html>
```

4. Save the template and note down your **Template ID**

## Step 4: Configure Resume File Upload

### Option A: EmailJS File Attachment (Recommended)

EmailJS supports file attachments directly. The resume will be attached to the email.

### Option B: File Upload to Cloud Storage

1. Set up Google Drive or Dropbox integration
2. Upload resume to cloud storage
3. Send download link in email

## Step 5: Update Configuration

1. Open `src/utils/emailjs-config.ts`
2. Replace the career-specific values:

```typescript
export const CAREER_EMAILJS_CONFIG = {
  SERVICE_ID: 'your_career_service_id_here',
  TEMPLATE_ID: 'your_career_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
};
```

## Step 6: Test the Career Form

1. Start your development server: `npm run dev`
2. Navigate to the career page
3. Fill out the form with a test resume
4. Submit and check your email

## Career Form Features

The updated career form includes:

- ✅ **Full Name field** - Applicant's full name
- ✅ **Email field** - Applicant's email address
- ✅ **Position field** - Job position they're applying for
- ✅ **Experience Summary** - Detailed experience and motivation
- ✅ **Resume Upload** - PDF file upload (max 5MB)
- ✅ **File Attachment** - Resume file attached to email for download
- ✅ **Form validation** - Client-side validation
- ✅ **EmailJS integration** - Automated email with resume attachment
- ✅ **Success/Error messages** - User feedback
- ✅ **Responsive design** - Works on all devices
- ✅ **Professional styling** - Matches your site's design

## EmailJS Template Variables

The career form sends these variables to EmailJS:

- `{{from_name}}` - Applicant's full name
- `{{from_email}}` - Applicant's email address
- `{{subject}}` - Position applied for
- `{{summary}}` - Experience and motivation
- `{{resume_filename}}` - Name of uploaded resume file
- `{{resume_size}}` - Size of resume file
- `{{to_name}}` - Your team name

## File Upload Limitations

- **File Type**: PDF only
- **File Size**: Maximum 5MB
- **Validation**: Client-side validation before submission

## Troubleshooting

### Common Issues:

1. **"Resume not attached" error**: Check EmailJS file attachment settings
2. **"File too large" error**: Ensure file is under 5MB
3. **"Invalid file type" error**: Only PDF files are accepted
4. **"Service not found" error**: Verify your Career Service ID

### Security Notes:

- Resume files are processed through EmailJS
- Consider implementing additional server-side validation
- The free tier allows 200 emails per month
- For production, consider using environment variables

## Environment Variables (Recommended for Production)

For better security, use environment variables:

1. Create a `.env` file:

```env
VITE_CAREER_EMAILJS_SERVICE_ID=your_career_service_id
VITE_CAREER_EMAILJS_TEMPLATE_ID=your_career_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `src/utils/emailjs-config.ts`:

```typescript
export const CAREER_EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_CAREER_EMAILJS_SERVICE_ID || 'YOUR_CAREER_EMAILJS_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_CAREER_EMAILJS_TEMPLATE_ID || 'YOUR_CAREER_EMAILJS_TEMPLATE_ID',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
};
```

The career form is now ready to handle resume uploads and send professional job applications via EmailJS!
