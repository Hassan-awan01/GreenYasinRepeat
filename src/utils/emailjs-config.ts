// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in EmailJS dashboard)
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',

  // Your EmailJS Template ID (found in EmailJS dashboard)
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',

  // Your EmailJS Public Key (found in EmailJS dashboard)
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
};

// Career-specific EmailJS configuration
export const CAREER_EMAILJS_CONFIG = {
  // Your EmailJS Service ID for career applications
  SERVICE_ID: 'YOUR_CAREER_EMAILJS_SERVICE_ID',

  // Your EmailJS Template ID for career applications
  TEMPLATE_ID: 'YOUR_CAREER_EMAILJS_TEMPLATE_ID',

  // Your EmailJS Public Key (same as above)
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
};

// Template parameters that will be sent to EmailJS (Contact Form)
export interface EmailJSTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
}

// Template parameters for Career Form
export interface CareerEmailJSTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  summary: string;
  to_name: string;
  resume_filename: string;
  resume_size: string;
}

// Example EmailJS template structure for Contact Form:
/*
Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Your Website
*/

// Example EmailJS template structure for Career Form:
/*
Hello {{to_name}},

You have received a new job application:

Name: {{from_name}}
Email: {{from_email}}
Position: {{subject}}
Experience: {{summary}}
Resume: {{resume_filename}} ({{resume_size}})

Please review this application and respond accordingly.

Best regards,
Your Website
*/
