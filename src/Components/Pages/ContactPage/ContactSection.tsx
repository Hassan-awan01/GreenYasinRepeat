import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import ContactSchema from './ContactSchema';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  subject: string;
  email: string;
  query: string;
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

                  {(['name', 'email', 'subject'] as const).map((fieldName) => (
                    <div key={fieldName}>
                      <Field
                        name={fieldName}
                        type={fieldName === 'email' ? 'email' : 'text'}
                        placeholder={
                          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                        }
                        className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                      />
                      <ErrorMessage
                        name={fieldName}
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                  ))}

                  <div>
                    <Field
                      as="textarea"
                      name="query"
                      placeholder="Project details or Query"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="query"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-md bg-emerald-500 py-3 font-semibold text-white transition-colors duration-300 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
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
