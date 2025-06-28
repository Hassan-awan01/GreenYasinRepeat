import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long')
    .required('Name is required'),
  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
      'Please enter a valid phone number. Example: +1 (234) 567-8900',
    )
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .min(2, 'subject must be at least 2 characters')
    .required('subject is required'),
  query: Yup.string()
    .min(10, 'Query must be at least 10 characters')
    .required('Query is required'),
});

export default ContactSchema;
