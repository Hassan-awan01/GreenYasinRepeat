import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import ContactSchema from './ContactSchema';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../../utils/emailjs-config';

interface ContactFormValues {
  fullName: string;
  email: string;
  message: string;
}

interface SubmissionStatus {
  success: boolean;
  message: string;
}

function ContactSection() {
  const [status, setStatus] = useState<SubmissionStatus | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    setSubmitting(true);
    setStatus(null);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: values.fullName,
        from_email: values.email,
        message: values.message,
        to_name: 'Green Yasin Team',
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (result.status === 200) {
        setStatus({
          success: true,
          message: 'Message sent successfully! We will get back to you soon.',
        });
        resetForm();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        success: false,
        message:
          'Error sending message. Please try again or contact us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInfo />
          <motion.div
            className="rounded-2xl bg-gray-50 p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <Formik<ContactFormValues>
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4">
                  {status && (
                    <div
                      className={`rounded-md p-4 ${
                        status.success
                          ? 'border border-green-400 bg-green-100 text-green-700'
                          : 'border border-red-400 bg-red-100 text-red-700'
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  {/* Full Name Field */}
                  <div>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-md bg-emerald-500 py-3 font-semibold text-white transition-colors duration-300 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
