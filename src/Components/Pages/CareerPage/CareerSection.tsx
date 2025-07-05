import { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import CareerSchema from './CareerSchema';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CAREER_EMAILJS_CONFIG } from '../../../utils/emailjs-config';

interface CareerFormValues {
  name: string;
  subject: string;
  summary: string;
  email: string;
  resume: File | null;
}

interface SubmissionStatus {
  success: boolean;
  message: string;
}

function CareerSection() {
  const [status, setStatus] = useState<SubmissionStatus | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    values: CareerFormValues,
    { resetForm }: FormikHelpers<CareerFormValues>,
  ) => {
    setSubmitting(true);
    setStatus(null);

    try {
      // Send email using EmailJS sendForm method for file attachment
      const result = await emailjs.sendForm(
        CAREER_EMAILJS_CONFIG.SERVICE_ID,
        CAREER_EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!, // Use the actual form element
        CAREER_EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (result.status === 200) {
        setStatus({
          success: true,
          message:
            'Application submitted successfully! We will review your resume and get back to you soon.',
        });
        resetForm();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        throw new Error('Failed to send application');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        success: false,
        message:
          'Error submitting application. Please try again or contact us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFieldValue('resume', file);
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
            <Formik<CareerFormValues>
              initialValues={{
                name: '',
                subject: '',
                summary: '',
                email: '',
                resume: null,
              }}
              validationSchema={CareerSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form ref={formRef} className="flex flex-col gap-4">
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

                  {/* Name Field */}
                  <div>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="name"
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

                  {/* Subject Field */}
                  <div>
                    <Field
                      name="subject"
                      type="text"
                      placeholder="Position you're applying for"
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Summary Field */}
                  <div>
                    <Field
                      as="textarea"
                      name="summary"
                      placeholder="Tell us about your experience and why you're interested in this position..."
                      rows={4}
                      className="w-full rounded-md border border-gray-300 p-3 transition-colors duration-200 focus:border-emerald-500 focus:outline-none"
                    />
                    <ErrorMessage
                      name="summary"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  {/* Resume Upload Field */}
                  <div>
                    <div className="relative">
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="resume_file"
                        accept=".pdf"
                        onChange={(event) =>
                          handleFileChange(event, setFieldValue)
                        }
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4 transition-colors duration-200 hover:border-emerald-500 hover:bg-emerald-50"
                      >
                        <div className="text-center">
                          <div className="mb-2 text-emerald-500">
                            <svg
                              className="mx-auto h-8 w-8"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">
                            {values.resume
                              ? values.resume.name
                              : 'Click to upload your resume (PDF only)'}
                          </p>
                          <p className="text-xs text-gray-500">
                            Max file size: 5MB
                          </p>
                        </div>
                      </label>
                    </div>
                    <ErrorMessage
                      name="resume"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-md bg-emerald-500 py-3 font-semibold text-white transition-colors duration-300 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
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

export default CareerSection;
