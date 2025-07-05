import * as Yup from 'yup';

const CareerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long')
    .required('Name is required'),

  subject: Yup.string()
    .min(2, 'Subject must be at least 2 characters')
    .max(100, 'Subject is too long')
    .required('Subject is required'),

  summary: Yup.string()
    .min(10, 'Summary must be at least 10 characters')
    .max(500, 'Summary is too long')
    .required('Summary is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  resume: Yup.mixed<File>()
    .required('Resume is required')
    .test(
      'fileSize',
      'File size is too large. Max size is 5MB.',
      (value): boolean => {
        return value instanceof File && value.size <= 5 * 1024 * 1024;
      },
    )
    .test('fileType', 'Only PDF files are allowed.', (value): boolean => {
      return value instanceof File && value.type === 'application/pdf';
    }),
});

export default CareerSchema;
