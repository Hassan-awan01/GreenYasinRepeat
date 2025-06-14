import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// import './ContactSection.css'; // Removed import
import ContactSchema from './ContactSchema';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion'; // Import motion for animations

function ContactSection() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      setStatus({ success: true, message: 'Form submitted successfully!' });
      /* eslint-disable-next-line no-unused-vars */
    } catch (error) {
      setStatus({
        success: false,
        message: 'Error submitting form. Try again.',
      });
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <Formik
              initialValues={{
                name: '',
                subject: '',
                email: '',
                query: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4">
                  {/* Status Messages */}
                  {status && (
                    <div
                      className={`p-4 rounded-md ${
                        status.success ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  {/* Form Fields */}
                  {['name', 'email', 'subject'].map((fieldName) => (
                    <div key={fieldName}>
                      <Field
                        name={fieldName}
                        type={fieldName === 'email' ? 'email' : 'text'}
                        placeholder={
                          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                        }
                        className="w-full p-3 border border-gray-300 rounded-md transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                      />
                      <ErrorMessage
                        name={fieldName}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  ))}
                  {/* Query Textarea */}
                  <div>
                    <Field
                      as="textarea"
                      name="query"
                      placeholder="Project details or Query"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="query"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-emerald-500 text-white py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Send'}
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
